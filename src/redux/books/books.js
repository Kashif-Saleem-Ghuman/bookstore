// action types
const ADDED_BOOK = 'book added';
const DELETED_BOOK = 'book deleted';

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
  type: ADDED_BOOK,
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
