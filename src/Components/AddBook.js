import { React, useState } from 'react';
// import { addedBook } from '../redux/books/books';

export default function AddBook() {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  // const id = Math.random().toString();

  // dispatch fetchbooks on clcik of add button
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="fs-2 text">Add New Book</h2>
      <form className="row g-3">
        <div className="col-7">
          <input type="text" className="form-control" value={title} onChange={(e) => settitle(e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1, e.target.value.length).toLocaleLowerCase())} id="inputPassword2" placeholder="Book Title" required />
        </div>
        <div className="col-3">
          <input type="text" className="form-control" value={author} onChange={(e) => setauthor(e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1, e.target.value.length).toLocaleLowerCase())} id="inputPassword2" placeholder="Book Author" required />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Add Book</button>
        </div>
      </form>
    </div>
  );
}
