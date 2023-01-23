import types from '../types';

// Initial state of books

const initialState = {
  books: [],
};

// Action Creators

export const addedBook = (bookadded) => ({
  type: types.ADDED_BOOK,
  payload: bookadded,
});

export const removeBook = (bookremoved) => ({
  type: types.ADDED_BOOK,
  payload: bookremoved,
});

// Reducers

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_BOOK:
      return {
        ...state,
        books: [...state.books, action.bookadded],
      };
    case types.DELETED_BOOK:
      return {
        ...state,
        books: [...state.books, action.bookremoved],
      };
    default:
      return state;
  }
};

export default booksReducer;
