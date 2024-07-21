import { Router } from "express";
import BooksController from "./controllers/booksController";

const booksController = new BooksController();

const routes = Router()
    .get('/livros', booksController.getAllBooks)
    .get('/livros/:id', booksController.getBook)

    .post('/livros')
    .put('/livros/:id')

    .delete('/livros/:id')

export default routes;