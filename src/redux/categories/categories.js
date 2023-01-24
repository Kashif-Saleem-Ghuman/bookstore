import types from '../types';

const initialState = {
  categories: [],
};

// Action Creators

export const checkStatus = () => ({
  type: types.CHECK_STATUS,
});

// Reducers

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_STATUS:
      return {
        ...state,
        categories: [...state.categories, ''],
      };
    default:
      return state;
  }
};

export default categoriesReducer;
