import { DB_URL } from "./serverConfig.js"
import mongoose from "mongoose"
const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log("Connected to DB")
    } catch (error) {
        console.log("DB connection error", error)
    }
}

export default connectToDB
