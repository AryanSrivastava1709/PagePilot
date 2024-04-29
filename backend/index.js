import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "bookstore",
    format: async (req, file) => "png", // supports promises as well
    public_id: (req, file) => file.originalname,
  },
});

const parser = multer({ storage: storage });

app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.use(
  express.json({
    limit: "10kb",
  })
);

//Serving Static Files
app.use(express.static(`${__dirname}/public`));

//example get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//definig routes
app.use("/book", parser.single("image"), bookRoutes);
app.use("/user", userRoutes);
