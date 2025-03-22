import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import categoriesSlice from "./slice/categoriesSlice";
import filterSlice from "./slice/filterSlice";
import paginationSlice from "./slice/paginationSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    categories: categoriesSlice,
    filters: filterSlice,
    pagination: paginationSlice,
  },
});
