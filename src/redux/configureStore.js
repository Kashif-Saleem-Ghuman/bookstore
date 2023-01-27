import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';
import apiReducer from './books/fetchapi';
import addBookReducer from './books/AddBook';

// combining all reducers
const reducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
  apiReducer,
  addBook: addBookReducer,
});

const store = createStore(
  (state, action) => reducer(state, action), applyMiddleware(thunk),
);

export default store;
