import { generateToken } from "../../utils/jwt.js"
import { createUser, findUserByEmail } from "../repository/userRepo.js"

export const registerService = async (userCredentialsobj) => {
    try {
        const user = await createUser(userCredentialsobj)
        return user
    } catch (error) {
        throw error
    }
}

export const loginService = async (userCredentialobj) => {
    try {
        const user = await findUserByEmail(userCredentialobj.email)
        if (!user) {
            throw {
                status: 404,
                message: "User not found"
            }
        }
        const isPasswordMatch = userCredentialobj.password == user.password
        if (!isPasswordMatch) {
            throw {
                status: 400,
                message: "Invalid password"
            }
        }
        const token = generateToken({ userId: user._id })
        return { user, token }

    } catch (error) {
        throw error
    }

}