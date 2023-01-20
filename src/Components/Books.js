import React from 'react';
import PropTypes from 'prop-types';

export default function Books(props) {
  const { title, author } = props;
  return (
    <>
      <div className="container">
        <ul className="ul-books">
          <li className="li-books">
            <span>{title}</span>
            <span>{author}</span>
            <button type="submit">Remove</button>
          </li>
        </ul>
        <h2 className="fs-2 text">Add New Book</h2>
        <form className="row g-3">
          <div className="col-8">
            <input type="password" className="form-control" id="inputPassword2" placeholder="Book title" />
          </div>
          <div className="col-2">
            <select className="custom-select form-control" id="inputGroupSelect04">
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary mb-3">Add Book</button>
          </div>
        </form>
      </div>

    </>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
