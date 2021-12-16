import { Schema, model } from "mongoose";

type UserType = {
    name: string,
    surname: string
}

const userSchema = new Schema<UserType>({
    name: {type: String, required: true},
    surname: {type: String, required: true}
});

export default model<UserType>('Users', userSchema);