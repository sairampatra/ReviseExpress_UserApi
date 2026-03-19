import express from "express";
import { PORT, CORS_ORIGIN } from "./config/serverConfig.js";
import cors from "cors"
import connectToDB from "./config/dbConfig.js"
import cookieParser from "cookie-parser";
import apiRouter from "./router/v1/apiRouter.js"

connectToDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({ origin: CORS_ORIGIN, credentials: true }))

app.get("/", (req, res) => {
    return res.json({
        message: "jagan",
        success: true
    })
})

app.use("/api", apiRouter)

// Global Error Handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    return res.status(status).json({
        success: false,
        message: message
    });
});

app.listen(PORT, () => {
    console.log(`Server start hela MG ${PORT}`)
})

