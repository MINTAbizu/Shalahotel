import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String }
}, { timestamps: true });

const usermodel=mongoose.model('User', userSchema);
export default usermodel;

