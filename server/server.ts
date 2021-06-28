import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import morgan from "morgan";
import productsRouter from "./routes/productsRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

//configs
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();

app.use(express.json())

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

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
