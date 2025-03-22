// import { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axiosInstance from "@/axios/axios";
// import { setProducts } from "@/utils/slice/productSlice";

// const useFetchProducts = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const selectedCategory = useSelector(
//     (state) => state?.categories?.selectedCategory
//   );
//   const { minPrice, maxPrice, rating } = useSelector((state) => state?.filters);
//   const searchVal = useSelector((state) => state?.product?.searchVal);

//   const fetchProducts = useCallback(async () => {
//     try {
//       const endpoint =
//         selectedCategory === "all"
//           ? "/products"
//           : `/products/category/${selectedCategory}`;
//       const response = await axiosInstance.get(endpoint);

//       let filteredProducts = response.data;

//       filteredProducts = response.data.filter((product) => {
//         return (
//           product.price >= minPrice &&
//           product.price <= maxPrice &&
//           (rating ? product.rating.rate >= rating : true)
//         );
//       });

//       if (searchVal) {
//         filteredProducts = response.data.filter((product) => {
//           return product?.title.toLowerCase().includes(searchVal.toLowerCase());
//         });
//       }

//       dispatch(setProducts(filteredProducts));
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, selectedCategory, minPrice, maxPrice, rating, searchVal]);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   return { loading, error };
// };

// export default useFetchProducts;

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/axios/axios";
import { setProducts } from "@/utils/slice/productSlice";

const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state?.categories?.selectedCategory
  );
  const { minPrice, maxPrice, rating } = useSelector((state) => state?.filters);
  const searchVal = useSelector((state) => state?.product?.searchVal);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const endpoint =
        selectedCategory === "all"
          ? "/products"
          : `/products/category/${selectedCategory}`;
      const response = await axiosInstance.get(endpoint);

      let filteredProducts = response.data;

      if (searchVal) {
        filteredProducts = filteredProducts.filter((product) =>
          product?.title.toLowerCase().includes(searchVal.toLowerCase())
        );
      }

      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= minPrice &&
          product.price <= maxPrice &&
          (rating ? product.rating.rate >= rating : true)
      );

      dispatch(setProducts(filteredProducts));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [dispatch, selectedCategory, minPrice, maxPrice, rating, searchVal]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { loading, error };
};

export default useFetchProducts;
