// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addedBook, removeBook } from '../redux/books/books';

export default function Books() {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  // const { title, author } = props;

  // consuming state
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const id = Math.random().toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addedBook({ title, author, id }));
  };

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="container">
        <ul className="my-4 border border-3 p-0">
          <li className="d-flex justify-content-between ms-0 p-3">
            {books.map((book) => (
              <span key={book.id}>
                <span>{book.title}</span>
                <span>{book.author}</span>
                <button className="btn btn-primary mb-3" type="submit" onClick={() => { handleDelete(book.id); }}>Remove</button>
              </span>
            ))}
          </li>
        </ul>
        <h2 className="fs-2 text">Add New Book</h2>
        <form className="row g-3">
          <div className="col-8">
            <input type="text" className="form-control" value={title} onChange={(e) => settitle(e.target.value)} id="inputPassword2" placeholder="Book title" />
          </div>
          <div className="col-8">
            <input type="text" className="form-control" value={author} onChange={(e) => setauthor(e.target.value)} id="inputPassword2" placeholder="Book title" />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Add Book</button>
          </div>
        </form>
      </div>
    </>
  );
}
