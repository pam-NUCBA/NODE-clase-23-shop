import User from "../models/User.js";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//*vamos a tener que hacer auth de user y password para enviar un token que se va a guardar en el client

//? POST: create new user
//? api/users/register
const registerUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //*ese password va a tener que ser encriptado
    const user = await User.create({
      name,
      email,
      password,
    });

    // console.log(user);

    if (user) {
      //*para hacer el sign del token lo vamos a hacer en el util. Si probamos en https://jwt.io/ vamos a ver que los datos que devuelve el payload son el id, the issuedAtDate y la expiration date
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

//? POST: user login
//? api/users/login
const authUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    //*ahora para poder usarlo tengo que crear el util de jwt
    //*este match va a venir del userModel
    // console.log(user._id);
    if (user && (await user.matchPassword(password))) {
      res.json({
        ...req.body,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  }
);

//? GET user profile: esta va a ser una ruta protegida, y solo se va a poder entrar estando logueado
//? api/users/profile
const getUserProfile = expressAsyncHandler(
  async (req: any, res: Response): Promise<void> => {
    const user = await User.findById(req.user._id);
    const { _id, name, email, isAdmin } = req.user;
    //*los extraigo porque si paso el ...req.user va a traer mucha info que no necesito
    if (user) {
      res.json({
        _id,
        name,
        email,
        isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  }
);

export { authUser, registerUser, getUserProfile };
