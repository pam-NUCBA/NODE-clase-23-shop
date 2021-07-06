import express from "express";
import { getProducts, getOneProduct } from "../controllers/productsController";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getOneProduct);

export default router;
