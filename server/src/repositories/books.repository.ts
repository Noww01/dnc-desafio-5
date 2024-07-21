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
            return {
                status: 500,
                data: {
                    message: 'Error fetching books'
                }
            }
        }
    }

    async getBook(id: number): Promise<BooksRepoResponse> {
        try {
            const book = await Book.find({ id: id });
            
            if (book === null)
                return {
                    status: 404,
                    data: {
                        message: 'Book not found'
                    }
                }

            return {
                status: 200,
                data: book
            }
        } catch (error) {
            return {
                status: 500,
                data: {
                    message: 'Error fetching books'
                }
            }
        }
    }

    async createBook(data: BookType): Promise<BooksRepoResponse> {
        try {
            const newBook = new Book(data);
            await newBook.save();

            return {
                status: 201,
                data: newBook
            }
        } catch (error: any) {
            if (error.code == 11000)
                return {
                    status: 401,
                    data: {
                        message: 'Book already exists'
                    }
                }

            return {
                status: 500,
                data: {
                    message: 'Error creating book'
                }
            }
        }
    }

    async updateBook({ id, data }: { id: number, data: BookType}): Promise<BooksRepoResponse> {
        try {
            const updatedBook = await Book.findOneAndUpdate({ id: id }, data);

            if (updatedBook === null)
                return {
                    status: 404,
                    data: {
                        message: 'Book not found'
                    }
                }

            return {
                status: 200,
                data: updatedBook
            }
        } catch (error: any) {
            if (error.code == 11000)
                return {
                    status: 401,
                    data: {
                        message: 'Duplicated key'
                    }
                }

            return {
                status: 500,
                data: {
                    message: 'Error updating book'
                }
            }
        }
    }

    async deleteBook(id: number): Promise<BooksRepoResponse> {
        try {
            const book = await Book.findOneAndDelete({ id: id });

            if (book === null)
                return {
                    status: 404,
                    data: {
                        message: 'Book not found'
                    }
                }

            return {
                status: 200,
                data: {
                    message: 'Book deleted'
                }
            }
        } catch (error) {
            return {
                status: 500,
                data: {
                    message: 'Error updating book'
                }
            }
        }
    }
}