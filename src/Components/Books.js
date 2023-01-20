import React from 'react';
import PropTypes from 'prop-types';

export default function Books(props) {
  const { title, author } = props;
  return (
    <>
      <ul className="ul-books">
        <li className="li-books">
          <span>{title}</span>
          <span>{author}</span>
          <button type="submit">Remove</button>
        </li>
      </ul>
    </>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
