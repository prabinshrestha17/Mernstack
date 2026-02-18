import express from "express";
import cors from "cors";
import { productRouter } from "./routes/product.route.js";
import { orderRouter } from "./routes/order.route.js";
import { userRouter } from "./routes/user.route.js";
import { fileRouter } from "./routes/file.route.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/connectMongo.js";
import { FRONTEND_URL } from "./config/env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create upload folder if it doesn't exist
const uploadDir = path.join(__dirname, "upload");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Upload folder created");
}

const app = express();

app.use(
  cors({
    origin:
      FRONTEND_URL ||
      "https://mernstack-w1ne.vercel.app" ||
      "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.static("./upload"));

connectDB();
app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/file", fileRouter);



app.get("/", (req, res) => {
  res.send("Hello world");
});
