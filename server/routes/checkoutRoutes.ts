import express from "express";
import {
  postCheckoutButton, postWalletButton, postCreatePayment, postProcessPayment
} from "../controllers/checkoutController";


const router = express.Router();

router.post("/process_payment", postProcessPayment)

//ver si las necesito
router.post("/checkout", postCheckoutButton);
router.post("/pagar", postCreatePayment);
router.post("/wallet", postWalletButton);

export default router;
