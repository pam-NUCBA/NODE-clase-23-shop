import express from "express";
import {
  getProducts,
  getOneProduct,
} from "../controllers/productsController.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getOneProduct);

export default router;
