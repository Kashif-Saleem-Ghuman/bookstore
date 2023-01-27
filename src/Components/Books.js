import { useSelector, useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/books';
import { useEffect } from 'react';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/fetchapi';
import { removeBooks } from '../redux/books/DeleteBokk';

export default function Books() {
  // consuming state
  // const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    error,
  } = useSelector((state) => state.apiReducer);

  const bookArr = [];
  // converting the data into an array
  Object.entries(data).forEach(([key, value]) => {
    const book = value[0];
    const id = { id: key };
    bookArr.push({ ...book, ...id });
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeBooks(id));
  };

  if (isLoading === 'loading') {
    return <h2>Loading...</h2>;
  }
  if (error === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="container">
        <div className="my-4 border border-3 p-0">
          {/* <div>
            {booksFetch.map((book) => (
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
          </div> */
          bookArr.map((e) => (
            <div key={data.id} className="d-flex justify-content-between ms-0 p-3">
              <span>
                Title:
                {' '}
                {e.title}
              </span>
              <span>
                Author:
                {' '}
                {e.author}
              </span>
              <button
                className="btn btn-primary mb-3"
                type="submit"
                onClick={() => { handleDelete(e.id); }}
              >
                Remove

              </button>
            </div>
          ))
          }
        </div>
      </div>
      <div className="container"><AddBook /></div>
    </>
  );
}
