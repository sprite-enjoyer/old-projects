import * as exercises from "./exercises";
import { RoutineDetails, Audience, WeekDays } from "../models/Routine";
import { Exercise } from "../models/Exercise";

export const basicRoutine: RoutineDetails = {
    name: "Basic routine",
    Difficulty: 2,
    image: "https://i.ytimg.com/an/_dYHZrlORO0/e5723667-600a-4800-8ef5-8ab5a3315410_mq.jpg?v=5bd33f1d",
    objectives: ["stay fit", "be healthy", "burn calories"],
    isFor: [Audience.CHILDREN, Audience.ADULTS, Audience.SENIORS],
    routine: new Map<WeekDays, Exercise[]>,
}

basicRoutine.routine
    .set(WeekDays.MONDAY,
    [
        exercises.standardPushup,
        exercises.lunges
    ]).set(WeekDays.TUESDAY,
    [
        exercises.situp,
        exercises.squats
    ]).set(WeekDays.WEDNESDAY, 
    [
        exercises.standardPushup,
        exercises.crunches,
    ]).set(WeekDays.THURSDAY, 
    [
        exercises.bridge,
        exercises.plank
    ]).set(WeekDays.FRIDAY, 
    [
        exercises.bridgeHold,
        exercises.legRaise
    ]).set(WeekDays.SATURDAY, 
    [
        
    ]).set(WeekDays.SUNDAY, 
    [

    ]);

export const muscleRoutine: RoutineDetails = {
    name: "Bodyweight muscle",
    Difficulty: 6,
    image: "https://www.mensjournal.com/wp-content/uploads/mf/athletic_man_main.jpg?quality=78&strip=all",
    objectives: ["build muscle", "get stronger", "burn fat"],
    isFor: [Audience.ADULTS],
    routine: new Map<WeekDays, Exercise[]>,
}

muscleRoutine.routine
.set(WeekDays.MONDAY,
    [
        exercises.standardPushup,
        exercises.crunches,
        exercises.lunges
    ]).set(WeekDays.TUESDAY,
    [
        exercises.diamondPushup,
        exercises.situp,
        exercises.squats
    ]).set(WeekDays.WEDNESDAY, 
    [
        exercises.militaryPushup,
        exercises.lunges,
        exercises.crunches,
    ]).set(WeekDays.THURSDAY, 
    [   
        exercises.wideHandsPushup,
        exercises.bridge,
        exercises.plank
    ]).set(WeekDays.FRIDAY, 
    [
        exercises.standardPushup,
        exercises.bridgeHold,
        exercises.legRaise

    ]).set(WeekDays.SATURDAY, 
    [
        exercises.lunges,
        exercises.stepUp,
        exercises.plank
        
    ]).set(WeekDays.SUNDAY, 
    [
        exercises.wideHandsPushup,
        exercises.crunches,
    ]);

export const strengthRoutine: RoutineDetails = {
    name: "Explosive strength",
    Difficulty: 8,
    image: "http://cdn.shopify.com/s/files/1/0283/5333/1331/articles/523.png?v=1626794352&width=1024",
    objectives: ["build strength", "work on muscle endurance", "burn fat"],
    isFor: [Audience.ADULTS],
    routine: new Map<WeekDays, Exercise[]>,
}

strengthRoutine.routine
.set(WeekDays.MONDAY,
    [
        exercises.standardPushup,
        exercises.crunches,
        exercises.lunges,
        exercises.plank
    ]).set(WeekDays.TUESDAY,
    [
        exercises.diamondPushup,
        exercises.situp,
        exercises.squats,
        exercises.bridgeHold
    ]).set(WeekDays.WEDNESDAY, 
    [
        exercises.militaryPushup,
        exercises.lunges,
        exercises.crunches,
        exercises.plank,
    ]).set(WeekDays.THURSDAY, 
    [   
        exercises.wideHandsPushup,
        exercises.bridge,
        exercises.plank,
        exercises.bridge,
    ]).set(WeekDays.FRIDAY, 
    [
        exercises.standardPushup,
        exercises.bridgeHold,
        exercises.legRaise,
        exercises.bridgeHold
    ]).set(WeekDays.SATURDAY, 
    [
        exercises.diamondPushup,
        exercises.lunges,
        exercises.stepUp,
        exercises.plank,
    ]).set(WeekDays.SUNDAY, 
    [
        exercises.wideHandsPushup,
        exercises.crunches,
        exercises.wideHandsPushup,
        exercises.plank
    ]);


const routineArr = [basicRoutine, muscleRoutine, strengthRoutine];
export default routineArr;    