import express from "express";
import { 
    // postProcessPayment
    createPreference,
    feedback
 } from "../controllers/checkoutController";

const router = express.Router();

// router.post("/process_payment", postProcessPayment);
router.post("/create_preference", createPreference)
router.get("/feedback", feedback)

export default router;
