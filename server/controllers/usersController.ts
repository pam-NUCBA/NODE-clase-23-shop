import User from "../models/User.js";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//*vamos a tener que hacer auth de user y password para enviar un token que se va a guardar en el client
//*post: get user login
//api/users/login
const authUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //*ahora para poder usarlo tengo que crear el util de jwt
  //*este match va a venir del userModel
  // console.log(user._id);
  if (user && (await user.matchPassword(password))) {
    res.json({
      ...req.body,
      //*para hacer el sign del token lo vamos a hacer en el util
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//*post: create new user
//api/users/register
const registerUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);
    if (user) {
      res.status(201).json({
        ...req.body,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

export { authUser, registerUser };
