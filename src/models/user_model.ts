import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import myUtils from "../utils/my_utils";

interface IUser extends Document {
    uid: string,
    name: string,
    age: number,
    city: string,
    ph_no: string
}

const userSchema: Schema = new Schema({
    uid: { type: String, default: function () { return myUtils.generateMongoId(); }, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    ph_no: { type: String, require: false }
}, { collection: "user" });

userSchema.index({ uid: -1 });

const UserModel = mongoose.model<IUser>('user', userSchema);

export { UserModel, IUser };