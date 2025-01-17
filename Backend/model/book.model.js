import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
    category: String,
    img: String
})

const Book = mongoose.model("Book", bookSchema);

export default Book