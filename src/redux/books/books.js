// action types
const ADDED_BOOK = 'redux/books/ADDED_BOOK';
const DELETED_BOOK = 'redux/books/DELETED_BOOK';

// Initial state of books

const initialState = [
  {
    id: '0',
    title: 'Harry Potter',
    author: 'JK Rowling',
  },
  {
    id: '1',
    title: 'Book 2 ',
    author: 'John',
  },
  {
    id: '2',
    title: 'Book 3 ',
    author: 'Doe',
  },
];

// Action Creators

export const addedBook = (bookadded) => ({
  type: ADDED_BOOK,
  payload: bookadded,
});

export const removeBook = (id) => ({
  type: DELETED_BOOK,
  payload: id,
});

// Reducers

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case DELETED_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
