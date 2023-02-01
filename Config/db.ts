import mongoose from "mongoose";

const fashDb = "mongodb://localhost/Fashion"

const fashDbConnection = async ()=>{
    try {
        const fashConnect = await mongoose.connect(fashDb)
        console.log(`Db is connected ${fashConnect.connection.host}`)
    } catch (error) {
        console.log("An error occured While connecting to Database")
    }
}

export default fashDbConnection