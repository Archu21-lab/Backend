import express from "express";
import { insertBook } from "../controller/book_controller";

const router = express.Router();

router.post("/:id",insertBook);



export default router;


