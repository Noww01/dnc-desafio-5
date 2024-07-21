import Book from '../database/models/Book';
import { BooksRepoResponse, BookType } from '../utils/types';

export default class BooksRepository {
    async getAll(): Promise<BooksRepoResponse> {
        try {
            const allBooks = await Book.find();

            return {
                status: 200,
                data: allBooks
            }
        } catch (error) {
            console.log(error);

            return {
                status: 500,
                message: 'Error fetching books'
            }
        }
    }

    async getBook(id: number): Promise<BooksRepoResponse> {
        try {
            const book = await Book.find({ id: id });
            
            if (book === null)
                return {
                    status: 404,
                    message: 'Book not found'
                }

            return {
                status: 200,
                data: book
            }
        } catch (error) {
            console.log(error);

            return {
                status: 500,
                message: 'Error fetching books'
            }
        }
    }
}