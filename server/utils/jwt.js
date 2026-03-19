import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../src/config/serverConfig.js"
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1d"
    })

}