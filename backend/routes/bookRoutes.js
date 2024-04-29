import express from "express";
import {
  getBooks,
  createBook,
  getBooksByCategory,
} from "../controllers/bookController.js";

const router = express.Router();
router.get("/", (req, res) => {
  if (req.query.category === "All") {
    getBooks(req, res);
  } else if (req.query.category) {
    getBooksByCategory(req, res);
  }
});
router.post("/create", createBook);
export default router;
