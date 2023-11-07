import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();
    const handleChange = event => setTitle(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} />
            <button>Save</button>
        </form>
    );
}

export default BookEdit;
