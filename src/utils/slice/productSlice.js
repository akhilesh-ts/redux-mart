import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    searchVal: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchVal: (state, action) => {
      state.searchVal = action.payload;
    },
  },
});

export const { setProducts, setSearchVal } = productSlice.actions;
export default productSlice.reducer;
