import { registerService, loginService } from "../service/userService.js"
export const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const user = await registerService({ username, email, password })
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        })
    } catch (error) {
        console.log("register error", error)
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const { user, token } = await loginService({ email, password })
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Security best practice
            sameSite: "None",                              // Required for cross-origin
            maxAge: 1 * 24 * 60 * 60 * 1000,
        })
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: user
        })
    } catch (error) {
        console.log("login error", error)
        next(error)
    }
}