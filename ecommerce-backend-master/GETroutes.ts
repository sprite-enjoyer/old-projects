import express, { Router} from "express";
import { Concentration, Exercise } from "./models/Exercise";
import excArr from "./items/exercises";
import shopItemsArr from "./items/shopItems";
import routineArr from "./items/routines";
import { ShopItem } from "./models/ShopItem";
import { Routine } from "./models/Routine";

const router: Router = express.Router();

router.get("/exercises", (req, res) => res.send(excArr));
router.get("/routines", (req, res) => res.send(routineArr));
router.get("/shopItems", (req, res) => res.send(shopItemsArr));

router.get("/exercises/:difficultyAscending/:maximumDifficulty/:concentration", (req, res) => {
    const [asc, maxDif, con] = 
    [
    req.params.difficultyAscending, 
    parseInt(req.params.maximumDifficulty), 
    req.params.concentration
    ];

    if (asc !== "true" && asc !== "false" && asc !== "null"){
        res.status(400); 
        return;
    }

    let filterResult = excArr;
    if (asc !== "null"){
        const ascending = asc === "true" ? true : false;
        filterResult = ascending === null ? excArr : excArr.sort((e1: Exercise, e2: Exercise) => {
            if (e1.difficulty > e2.difficulty) return ascending ? 1 : -1;
            if (e1.difficulty < e2.difficulty) return ascending ? -1 : 1;
            return 0;
        });
    }
    
    filterResult = typeof maxDif === "number" && !Number.isNaN(maxDif) ? 
    filterResult.filter((x: Exercise) => x.difficulty <= maxDif) : filterResult;
    filterResult = con === "null" ? filterResult : 
    filterResult.filter((x: Exercise) => x.OrientedOn.includes(con.toUpperCase() as Concentration));

    res.send(filterResult ? filterResult : "404");
});

router.get("/shopItems/:from-:to/:sex/:type", (req, res) => {
    const [from, to, sex, type] = 
    [
        parseInt(req.params.from),
        parseInt(req.params.to),
        req.params.sex.toUpperCase(),
        req.params.type.toUpperCase()
    ];

    if (typeof from !== "number" || typeof to !== "number" ||
        (
        sex !== "MALE" && 
        sex !== "FEMALE" && 
        sex !=="UNISEX" && 
        sex !== "ALL"
        ) 
        ||
        (
        type !== "TECH" &&
        type !== "SHOES" &&
        type !== "UPPERBODYWEAR" &&
        type !== "LOWERBODYWEAR" &&
        type !== "EQUIPMENT" &&
        type !== "ALL"
        )
        ){
            res.status(400).send({from, to, sex, type});
            return;
        }

    const filterByPriceOrNot = from !== 0 && to !== 0;
    const filterByTypeOrNot = type !== "ALL";
    const filterBySexOrNot = sex !== "ALL";

    let filterResult = filterByPriceOrNot ? shopItemsArr.filter(p => p.price > from && p.price < to) : shopItemsArr;
    filterResult = filterByTypeOrNot ? filterResult.filter(p => p.productType === type) : filterResult;
    filterResult = filterBySexOrNot ? 
    filterResult.filter(p => p.for === sex || p.for === "UNISEX") : filterResult;
    
    res.send(filterResult);
})

router.get("/exercises/exercise/:name", (req, res) => {
    const name = req.params.name;
    const filterResult = excArr.find((exercise: Exercise) => exercise.name === name);
    res.send(filterResult ? filterResult : "404");
});

router.get("/shopItems/:name", (req, res) => {
    const name = req.params.name;
    const filterResult = shopItemsArr.find((shopItem: ShopItem) => shopItem.name === name);
    res.send(filterResult ? filterResult : "404");
});

router.get("/routines/:name", (req, res) => {
    const name = req.params.name;
    const filterResult = routineArr.find((routine: Routine) => routine.name === name);
    res.send(filterResult ? filterResult : "404");
});

module.exports = router;