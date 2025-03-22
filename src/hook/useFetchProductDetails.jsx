import axiosInstance from "@/axios/axios";
import { useCallback, useEffect, useState } from "react";

const useFetchProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      console.log(response.data)
      setProductDetails(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return {
    productDetails,
    loading,
    error,
  };
};

export default useFetchProductDetails;
