import { useSelector } from 'react-redux';
// import { removeBook } from '../redux/books/books';
import AddBook from './AddBook';

export default function Books() {
  // consuming state
  // const books = useSelector((state) => state.books);
  const booksFetch = useSelector((state) => state.apiReducer);
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
  console.log('this:', booksFetch);
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
          booksFetch.data.array && booksFetch.data.array.map(() => (
            <div key={booksFetch.id} className="d-flex justify-content-between ms-0 p-3">
              {console.log('hi')}
            </div>
          ))
          }
        </div>
      </div>
      <div className="container"><AddBook /></div>
    </>
  );
}
