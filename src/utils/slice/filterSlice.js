import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: 0,
  maxPrice: 1000,
  rating: null,
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    resetFilter: () => initialState,
  },
});

export const { setMaxPrice, setMinPrice, setRating, resetFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
