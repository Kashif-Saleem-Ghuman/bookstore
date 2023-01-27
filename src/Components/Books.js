import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
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
        <div className="my-4 p-0 add-gap">
          {
          bookArr.map((e) => (
            <div key={data.id} className="d-flex flex-column justify-content-between ms-0 p-3 book">
              <h4 className="book-category">
                {' '}
                {e.category}
              </h4>
              <h2 className="book-title">
                {' '}
                {e.title}
              </h2>
              <h6 className="book-author">
                {' '}
                {e.author}
              </h6>
              <div className="action-buttons">
                <button
                  className="button-outline"
                  type="submit"
                >
                  Comments

                </button>
                <div className="vertical-divider" />
                <button
                  className="button-outline"
                  type="submit"
                  onClick={() => { handleDelete(e.id); }}
                >
                  Remove

                </button>
                <div className="vertical-divider" />
                <button
                  className="button-outline"
                  type="submit"
                >
                  Edit

                </button>
                <div className="vertical-divider" />
              </div>
              <div className="progress-counter">
                <div />
                <div />
                <div />
              </div>

            </div>
          ))
          }
        </div>
      </div>
      <div className="container"><AddBook /></div>
    </>
  );
}
