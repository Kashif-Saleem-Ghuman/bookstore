import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
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
// const store = configureStore(
//   reducer, applyMiddleware(thunk),
// );

const store = createStore(
  (state, action) => reducer(state, action), applyMiddleware(thunk),
);

export default store;
