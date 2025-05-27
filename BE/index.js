import express from "express";
import cors from "cors";
import Bookrouter from "./route/BookRouter.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors())
app.use("/books", Bookrouter); // Use the book router for /books endpoint

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});