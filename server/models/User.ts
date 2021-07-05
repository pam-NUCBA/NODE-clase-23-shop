import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";
import { NextFunction } from "express";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  timestamps: Date;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
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

//*queremos comparar el pass que se ingrese con el que esté registrado
userSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  let isValid = await bcrypt.compare(enteredPassword, this.password);
  return isValid;
};

//*pre es porque lo queremos antes de que grabe
userSchema.pre<IUser>(
  "save",
  async function (next: NextFunction): Promise<void> {
    if (!this.isModified("password")) {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
);

export default mongoose.model<IUser>("User", userSchema);
