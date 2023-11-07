import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:5000/books' : 'http://citweb.lanecc.net:5024/books';
    const [books, setBooks] = useState([]);
    const fetchBooks = useCallback(async () => {
        const response = await axios.get(URL);

        setBooks(response.data);
    }, []);
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`${URL}/${id}`, { title: newTitle });
        const updatedBooks = books.map(book => {
            if (book.id === id) return { ...book, ...response.data };

            return book;
        });

        setBooks(updatedBooks);
    };
    const deleteBookById = async id => {
        await axios.delete(`${URL}/${id}`);

        const updatedBooks = books.filter(book => book.id !== id);

        setBooks(updatedBooks);
    };
    const createBook = async (title) => {
        const response = await axios.post(URL, { title });
        const updatedBooks = [...books, response.data];

        setBooks(updatedBooks);
    };
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
