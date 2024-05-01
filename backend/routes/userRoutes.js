import { signup, login, edit } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/edit/:id", edit);

export default router;
