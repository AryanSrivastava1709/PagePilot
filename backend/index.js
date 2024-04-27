import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

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
app.use("/book", bookRoutes);
app.use("/user", userRoutes);
