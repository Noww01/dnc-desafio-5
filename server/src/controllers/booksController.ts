import { Request, Response } from 'express';
import BooksRepository from "../repositories/books.repository"

const booksRepo = new BooksRepository();

export default class BooksController {
    async getAllBooks(req: Request, res: Response){
        await booksRepo.getAll()
            .then(({ status, data }) => {
                if(status === 200)
                    return res.status(status).json(data);

                return res.status(500).json({
                    message: 'Error getting books'
                });
            });
    };

    async getBook(req: Request, res: Response) {
        const { id } = req.params;

        await booksRepo.getBook(Number(id))
            .then(({ status, data }) => {
                if(status === 200)
                    return res.status(status).json(data);

                return res.status(500).json({
                    message: 'Error getting book'
                });
            });
    };
}