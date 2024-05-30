import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-book-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book}></BookShow>;
  });
  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
