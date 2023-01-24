import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

// combining all reducers
const reducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

// giving the whole app access to state
const store = configureStore({
  reducer,
});

export default store;
