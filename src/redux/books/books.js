// action types
const ADDED_BOOK = 'redux/books/ADDED_BOOK';
const DELETED_BOOK = 'redux/books/DELETED_BOOK';

// Initial state of books

const initialState = {
  books: [],
};

// Action Creators

export const addedBook = (bookadded) => ({
  type: ADDED_BOOK,
  payload: bookadded,
});

export const removeBook = (bookremoved) => ({
  type: DELETED_BOOK,
  payload: bookremoved,
});

// Reducers

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return {
        ...state,
        books: [...state.books, action.bookadded],
      };
    case DELETED_BOOK:
      return {
        ...state,
        books: [...state.books, action.bookremoved],
      };
    default:
      return state;
  }
};

export default booksReducer;
