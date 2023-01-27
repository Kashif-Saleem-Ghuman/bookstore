import axios from 'axios';
import { fetchBooks, ID } from './fetchapi';

const initialState = {
  added: false,
  error: '',
};

const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE';

const addBookSuccess = () => ({
  type: ADD_BOOK_SUCCESS,
});

const addBookFailure = (error) => ({
  type: ADD_BOOK_FAILURE,
  error,
});

const addBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_SUCCESS:
      return {
        added: true,
      };
    case ADD_BOOK_FAILURE:
      return {
        added: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addBooks = (book) => async (dispatch) => {
  const ADD_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ID}/books`;
  await axios.post(ADD_URL, book)
    .then(() => {
      dispatch(addBookSuccess());
      dispatch(fetchBooks());
    })
    .catch((error) => {
      dispatch(addBookFailure(error.message));
    });
};

export default addBookReducer;
