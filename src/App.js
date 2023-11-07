import './App.css';
import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => { fetchBooks(); }, [fetchBooks]);

    return (
        <div >
            <h1 className='display-1 fw-bold'>Reading List</h1>
            <div className='d-flex flex-column flex-lg-row gap-5'>
                <BookCreate />
                <BookList />
            </div>
        </div>
    );
}

export default App;
