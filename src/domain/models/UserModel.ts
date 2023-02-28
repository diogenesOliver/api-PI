import { Schema, model } from "mongoose";

interface IUser {
    nome: string,
    email: string,
    confirmEmail: string,
    cpf: string
}

const userSchema = new Schema<IUser>(
    {
        nome: { type: String, require: true },
        email: { type: String, require: true },
        confirmEmail: { type: String, require: true },
        cpf: { type: String, require: true }
    },{
        timestamps: true
    }
)

const User = model<IUser>('User', userSchema)

export { User }