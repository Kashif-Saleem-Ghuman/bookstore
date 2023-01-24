import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const reducers = combineReducers({
  categoriesReducer,
  booksReducer,
});

const store = configureStore({
  reducers,
});

export default store;
