import { useSelector, useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/books';
import { useEffect } from 'react';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/fetchapi';

export default function Books() {
  // consuming state
  // const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    error,
  } = useSelector((state) => state.apiReducer);
  console.log('This is data: ', data);
  const bookArr = [];
  Object.entries(data).forEach(([key, value]) => {
    const book = value[0];
    const id = { id: key };
    bookArr.push({ ...book, ...id });
  });

  // Object.entries(data).forEach(([key, value]) => {
  //   const bookObj = value[0];
  //   const idObj = { id: key };
  //   bookArr.push(...bookObj, ...idObj);
  // });
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  // const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(removeBook(id));
  // };
  // if (booksFetch.isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (booksFetch.isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  console.log('this is booksFetch:', data);
  console.log('BookArr:', bookArr);
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
              {e.title}
            </div>
          ))
          }
        </div>
      </div>
      <div className="container"><AddBook /></div>
    </>
  );
}
