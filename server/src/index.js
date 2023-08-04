import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";


import { userRouter } from "./routes/userroutes.js";

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type",
        'Content-Type: multipart/form-data'
  
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    // Pass to next layer of middleware
    next();
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
mongoose.connect("mongodb+srv://lahirukavinda365:123test@cluster0.rybrtzf.mongodb.net/?retryWrites=true&w=majority"),{
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use("/auth",userRouter);


app.listen(3001, () => console.log("Server Started!"));











