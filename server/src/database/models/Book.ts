import { model, Schema } from "mongoose";

const BookSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    titulo: {
        type: String,
        required: true,
    },
    num_paginas: {
        type: Number,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    editora: {
        type: String,
        required: true
    }
});

const Book = model('Book', BookSchema);

export default Book;