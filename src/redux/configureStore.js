import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';
import apiReducer from './books/fetchapi';

// combining all reducers
const reducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
  apiReducer,
});

// giving the whole app access to state
const store = configureStore({
  reducer,
});

export default store;
