import axios from 'axios';
import { fetchBooks, ID } from './fetchapi';

const initialState = {
  removed: false,
  error: '',
};

const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAILURE = 'REMOVE_BOOK_FAILURE';

const removeBookSuccess = () => ({
  type: REMOVE_BOOK_SUCCESS,
});

const removeBookFailure = (error) => ({
  type: REMOVE_BOOK_FAILURE,
  error,
});

const removeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK_SUCCESS:
      return {
        removed: true,
      };
    case REMOVE_BOOK_FAILURE:
      return {
        removed: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const removeBooks = (id) => async (dispatch) => {
  const DELETE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ID}/books/${id}`;

  await axios.delete(DELETE_URL)
    .then(() => {
      dispatch(removeBookSuccess());
      dispatch(fetchBooks());
    })
    .catch((error) => {
      dispatch(removeBookFailure(error.message));
    });
};

export default removeBookReducer;
