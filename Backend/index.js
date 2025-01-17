import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()

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

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})