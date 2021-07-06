import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User";
import { Request, Response, NextFunction } from "express";

const protectRoutes = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //*el token va a llegar desde los headers como un bearer token
    let token;
    //*podemos consolear y vmaos a ver que nos trae el token:
    // console.log(req.headers.authorization)

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
        //*con el select evito que mande el password, que es algo que no queremos exponer
        req.user = await User.findById(decoded.id).select("-password");
        console.log(decoded.id);

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Token failed, you shall not pass!");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("No token, you shall not pass!");
    }
  }
);

const adminRoutes = (req: Request, res: Response, next: NextFunction): void => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protectRoutes, adminRoutes };
