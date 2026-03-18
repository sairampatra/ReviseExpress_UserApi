import { USER } from "../schema/user.model.js"
export const createUser = async (userCredentialsobj) => {
    try {
        const user = await USER.create(userCredentialsobj)
        return user
    } catch (error) {
        if (error.name == "MongoServerError" && error.code == 11000) {
            throw {
                status: 400,
                message: "User with the same email or username already exists"
            }
        }
        throw error
    }
}