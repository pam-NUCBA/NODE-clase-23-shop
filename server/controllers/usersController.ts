import User from '../models/User.js'
import { Request, Response } from "express";
import expressAsyncHandler from 'express-async-handler'
import generateToken from 'utils/generateToken.js';

//*vamos a tener que hacer auth de user y password para enviar un token que se va a guardar en el client
//api/users/login
const authUser = expressAsyncHandler(async (req: Request, res: Response) => {
    const {email, password} = req.body
    // res.send({email, password})

    const user = await User.findOne({email})

    // //*ahora para poder usarlo tengo que crear el util de jwt
    // //*este match va a venir del userModel
    if (user && (await user.matchPassword(password))) {
        const {_id, name, email, isAdmin} = req.body
        res.json({
          _id,
          name,
          email,
          isAdmin,
          token: generateToken(user._id),
        })
      } else {
        res.status(401)
        throw new Error('Invalid email or password')
      }
})


export { authUser }