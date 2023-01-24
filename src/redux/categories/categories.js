// Action types
const CHECK_STATUS = 'redux/books/CHECK_STATUS';

const initialState = {
  categories: [],
};

// Action Creators

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Reducers

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: [...state.categories, 'Under construction'],
      };
    default:
      return state;
  }
};

export default categoriesReducer;
