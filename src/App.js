import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import useBooksContext from "./hooks/use-book-context";
const App = () => {
  const { fetchBooks } = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate></BookCreate>
      <BookList></BookList>
    </div>
  );
};

export default App;
