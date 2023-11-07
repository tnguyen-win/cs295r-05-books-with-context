import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

const BookList = () => {
    const { books } = useBooksContext();
    const renderedBooks = books.map(book => <BookShow key={book.id} book={book} />);

    return <div className='row row-cols-1 row-cols-lg-2 my-lg-5'>{renderedBooks}</div>;
};

export default BookList;
