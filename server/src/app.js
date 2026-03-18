import express from "express";
import { PORT, CORS_ORIGIN } from "./config/serverConfig.js";
import cors from "cors"
import connectToDB from "./config/dbConfig.js"
import apiRouter from "./router/v1/apiRouter.js"
connectToDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: CORS_ORIGIN, credentials: true }))

app.get("/", (req, res) => {
    return res.json({
        message: "jagan",
        success: true
    })
})
app.use("/api", apiRouter)
app.listen(PORT, () => {
    console.log(`Server start hela MG ${PORT}`)
})

