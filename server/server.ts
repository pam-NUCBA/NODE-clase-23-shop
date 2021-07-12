import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db";
import morgan from "morgan";
import productsRouter from "./routes/productsRoutes";
import usersRouter from "./routes/usersRoutes";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";
import mercadopago from 'mercadopago'

//extending request:
declare global {
  namespace Express {
    export interface Request {
      user?: any;
    }
  }
}

//configs
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

mercadopago.configurations.setAccessToken(process.env.MERCADO_TOKEN)

//routes:
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

//middlewares:
app.use(notFound);
app.use(errorHandler);

//start:
app.listen(PORT, () => {
  console.log(
    `App running on ${process.env.NODE_ENV} mode at http://localhost:${PORT}`
  );
});
