import express,{Application} from "express"
import AppConfig from "./app"
import fashDbConnection from "./Config/db"
const app:Application = express()


const  port = 1000

AppConfig(app)
fashDbConnection()

app.listen(port,()=>{
    console.log(`Server is Listening to ${port}`)
})

