import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: String;
    email: String;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
});

export default model<IUser>('user', userSchema);
