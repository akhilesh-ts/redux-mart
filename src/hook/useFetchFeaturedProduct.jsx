import axiosInstance from "@/axios/axios";
import { setFeaturedProducts } from "@/utils/slice/productSlice";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useFetchFeaturedProduct = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const fetchProducts = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/products");
      console.log(response.data);
      dispatch(setFeaturedProducts(response.data));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    loading,
    error,
  };
};

export default useFetchFeaturedProduct;
