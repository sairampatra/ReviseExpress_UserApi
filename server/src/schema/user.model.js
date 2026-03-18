import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sex: { type: String, default: "others", enum: ["others"] }
}, { timestamps: true })

export const USER = mongoose.model("USER", userSchema)