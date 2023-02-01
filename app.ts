import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors"

const AppConfig = (app:Application)=>{
    app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    //routes

}

export default AppConfig