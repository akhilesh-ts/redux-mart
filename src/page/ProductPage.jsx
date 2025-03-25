import ErrorMessage from "@/components/error/ErrorMessage";
import Catgories from "@/components/FilterPanel/Categories";
import Filter from "@/components/FilterPanel/Filter";
import Search from "@/components/FilterPanel/Search";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import ProductListShimmer from "@/components/shimmer/ProductListShimmer";
import { Button } from "@/components/ui/button";
import useFetchProducts from "@/hook/useFetchProducts";
import { setSelectedCategory } from "@/utils/slice/categoriesSlice";
import { resetFilter } from "@/utils/slice/filterSlice";
import { setSearchVal } from "@/utils/slice/productSlice";
import { AlertTriangle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

const ProductPage = () => {
  const { loading, error } = useFetchProducts();
  const products = useSelector((state) => state?.product?.products);
  const productsPerPage = useSelector(
    (state) => state?.pagination?.productsPerPage
  );
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state?.pagination?.currentPage);
  const { maxPrice, rating, minPrice } = useSelector((state) => state?.filters);

  console.log(maxPrice, rating, minPrice);

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;
  const currentItems = products.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) {
    return <ProductListShimmer />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  const handelFilter = () => {
    dispatch(resetFilter());
    dispatch(setSelectedCategory("all"));
    dispatch(setSearchVal(""));
  };

  return (
    <div>
      <div className="w-full bg-gray-100 p-10 sticky top-0 md:flex items-center justify-between">
        <div className="w-full md:flex items-center gap-10">
          <Catgories />
          <Filter />
        </div>

        <Search />
      </div>

      {currentItems.length > 0 ? (
        <div className="w-full bg-gray-100 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
          {currentItems?.map((product) => (
            <Link key={product?.id} to={`/product/${product?.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full text-center">
          <div className="flex flex-col items-center justify-center py-10">
            <AlertTriangle className="text-gray-500 w-12 h-12" />
            <h2 className="text-lg font-semibold text-gray-700 mt-2">
              No Products Found
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Try adjusting your filters or search criteria.
            </p>
            <Button
              className="bg-blue-900 text-white mt-3 cursor-pointer"
              onClick={handelFilter}
            >
              {" "}
              clear
            </Button>
          </div>
        </div>
      )}

      {currentItems.length > 0 && <Pagination />}
    </div>
  );
};

export default ProductPage;
