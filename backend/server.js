import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;
connectToDB();

const app = express();

app.use(express.json()); // Parse JSON data first
app.use(express.urlencoded({ extended: true }));// Parse URL-encoded data
app.use(cookieParser()); // Parse cookie data

app.use("/api/users", userRoutes); // Your routes handling JSON data

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
} else {
  app.get('/', (req, res) => res.send('Server is ready'));
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
