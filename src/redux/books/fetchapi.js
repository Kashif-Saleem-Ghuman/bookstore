import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const ID = '6lBz9cCjC2bVP0IKvb99';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ID}/books`;

export const fetchBooks = createAsyncThunk('bookstore/books/fetch', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    isLoading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
