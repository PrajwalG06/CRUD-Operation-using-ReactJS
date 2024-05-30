import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");

  const { createBook } = useBooksContext();
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleOnSubmit}>
        <h3>Add Book</h3>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={handleOnChange}
          required
        ></input>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default BookCreate;
