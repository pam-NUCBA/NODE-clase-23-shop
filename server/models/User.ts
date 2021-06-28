import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.methods.matchPassword = async function (enteredPassword: string) {
  let isValid = await bcrypt.compare(enteredPassword, this.password)
  return isValid;
}

userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


export default mongoose.model<IUser>("User", userSchema);