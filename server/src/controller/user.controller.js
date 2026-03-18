import { registerService } from "../service/userService.js"

export const register = async (req, res) => {
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
    }
}