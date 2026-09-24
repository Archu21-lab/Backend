import express from "express";
import { signUp } from "../controller/auth_controller";

const router = express.Router();

router.post("/", signUp);

export default router;
