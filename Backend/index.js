import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoutes from "./route/book.route.js";
import UserRoute from "./route/user.route.js";

const app = express()

app.use(cors());
app.use(express.json());

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
app.use("/users", UserRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})