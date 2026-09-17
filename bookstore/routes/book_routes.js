import express from "express";
import { fetchBook, insertBook, removeBook, updateBook } from "../controller/book_controller.js";

const router = express.Router();

router.post("/:id",insertBook);
router.get("/",fetchBook);
router.delete("/",removeBook);
router.put("/",updateBook);



export default router;


