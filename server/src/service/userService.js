import { createUser } from "../repository/userRepo.js"

export const registerService = async (userCredentialsobj) => {
    try {
        const user = await createUser(userCredentialsobj)
        return user
    } catch (error) {
        throw error
    }
}