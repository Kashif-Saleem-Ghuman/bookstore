// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addedBook, removeBook } from '../redux/books/books';

export default function Books() {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');

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
        <div className="my-4 border border-3 p-0">
          <div>
            {books.map((book) => (
              <div key={book.id} className="d-flex justify-content-between ms-0 p-3">
                <span>
                  Title:
                  {' '}
                  {book.title}
                </span>
                <span>
                  Author:
                  {' '}
                  {book.author}
                </span>
                <button
                  className="btn btn-primary mb-3"
                  type="submit"
                  onClick={() => { handleDelete(book.id); }}
                >
                  Remove

                </button>
              </div>
            ))}
          </div>
        </div>
        <h2 className="fs-2 text">Add New Book</h2>
        <form className="row g-3">
          <div className="col-7">
            <input type="text" className="form-control" value={title} onChange={(e) => settitle(e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1, e.target.value.length).toLocaleLowerCase())} id="inputPassword2" placeholder="Book Title" />
          </div>
          <div className="col-3">
            <input type="text" className="form-control" value={author} onChange={(e) => setauthor(e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1, e.target.value.length).toLocaleLowerCase())} id="inputPassword2" placeholder="Book Author" />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Add Book</button>
          </div>
        </form>
      </div>
    </>
  );
}
