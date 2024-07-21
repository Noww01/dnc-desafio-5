export type BooksRepoResponse = {
    status: number,
    data?: {}, 
    message?: string
}

export type BookType = {
    id: {
        type: number,
        required: true,
        unique: true,
    },
    titulo: {
        type: String,
        required: true,
        unique: true,
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
}