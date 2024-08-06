
import express, { Express, Request, Response } from 'express';
import http from "http"

const port = 8000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(port, () => {
    console.log("listening to the port: " + port);
});

app.use("/get", require("./GETroutes"));

http.createServer(app).listen((port + 1), () => {
    console.log("http server started at port: " + (port + 1));
})
