import mongoose, {Schema , model} from 'mongoose';



export interface User  extends mongoose.Document{
    name: String,
    email: String,
    ci: String,
    admin: boolean,
    passaword: String,
    credits: Credit[]
}

export interface Credit {
    mount: number;
    expiresIn: Date;
    status: boolean;
    paid: boolean;
    createdAt: Date;
    saldo: number;
  }


const UserSchema = new Schema ({
    name: String,
    email: String,
    ci: String,
    passaword: String,
    admin: Boolean,
    credits: [{
        mount: Number,
        expiresIn: Date,
        status: Boolean,
        paid: Boolean,
        createdAt: Date,
        saldo: Number
    }]
})
export default model<User>('User', UserSchema)



