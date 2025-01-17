import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./route/book.route.js";
const app = express()

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Defining routes
app.use("/book", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})