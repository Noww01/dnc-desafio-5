import { Router } from "express";

const routes = Router();

routes
    .get('/livros')
    .get('/livros/:id')

    .post('/livros')
    .put('/livros/:id')

    .delete('/livros/:id')

export default routes;