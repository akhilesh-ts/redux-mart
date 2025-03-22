import axiosInstance from "@/axios/axios";
import { setCategories } from "@/utils/slice/categoriesSlice";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/products/categories");
      dispatch(setCategories(response.data));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    loading,
    error,
  };
};

export default useCategories;
