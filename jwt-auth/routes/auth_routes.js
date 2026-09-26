import express from "express";
import { signIn, signUp } from "../controller/auth_controller";

const router = express.Router();

router.post("/", signUp);
router.get("/",signIn);

export default router;


//
