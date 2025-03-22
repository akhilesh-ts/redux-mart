import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    productsPerPage: 5,
    currentPage: 1,
  },
  reducers: {
    setProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setProductsPerPage,setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
