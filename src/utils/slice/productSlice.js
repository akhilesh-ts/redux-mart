import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    searchVal: "",
    featuredProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
     
    },
    setSearchVal: (state, action) => {
      state.searchVal = action.payload;
    },
    setFeaturedProducts:(state,action)=>{
      state.featuredProducts=action.payload
    }
  },
});

export const { setProducts, setSearchVal,setFeaturedProducts } = productSlice.actions;
export default productSlice.reducer;
