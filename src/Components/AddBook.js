import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/AddBook';
// import { addedBook } from '../redux/books/books';

export default function AddBook() {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [category, setcategory] = useState('Fiction');
  const dispatch = useDispatch();
  // dispatch fetchbooks on click of add button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBooks({
        item_id: uuidv4(),
        title,
        author,
        category,
      }));
      settitle('');
      setauthor('');
      setcategory('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter book title and author name!');
    }
  };

  return (
    <div>
      <h2 className="fs-2 text margin-h2">Add New Book</h2>
      <form className="row g-4">
        <div className="col-8">
          <input type="text" className="form-control" value={title} onChange={(e) => settitle(e.target.value)} id="inputPassword2" placeholder="Book Title" required />
        </div>
        <div className="col-2">
          <input type="text" className="form-control" value={author} onChange={(e) => setauthor(e.target.value)} id="inputPassword2" placeholder="Book Author" required />
        </div>
        <div className="col-2 button">
          <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Add Book</button>
        </div>
      </form>
    </div>
  );
}
