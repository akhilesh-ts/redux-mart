import ErrorMessage from "@/components/error/ErrorMessage";
import ProductDetailShimmer from "@/components/shimmer/ProductDetailsShimmer";
import useFetchProductDetails from "@/hook/useFetchProductDetails";
import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, error, loading } = useFetchProductDetails(id);

  if (loading) {
    return <ProductDetailShimmer/>;
  }
  if (error) {
    return <ErrorMessage error={error}/>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg p-6">
          <div className="md:w-1/2">
            <div className="h-[500px] w-full rounded-lg border-2 shadow-2xl border-gray-300 overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={productDetails?.image}
                alt={productDetails?.title}
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {productDetails?.title}
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              Category:{" "}
              <span className="font-semibold">{productDetails.category}</span>
            </p>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array.from({ length: productDetails?.rating?.rate })].map(
                  (_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 fill-current ${
                        i < Math.round(productDetails?.rating?.rate)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  )
                )}
              </div>
              <span className="ml-2 text-gray-600 text-sm">
                {productDetails?.rating?.rate} ({productDetails?.rating?.count}{" "}
                reviews)
              </span>
            </div>
            <p className="text-gray-600 text-base mb-6">
              {productDetails.description}
            </p>
            <div className="flex flex-row items-center mb-6">
              <span className="text-gray-900 text-4xl font-bold">
                ₹{productDetails.price}
              </span>
            </div>
            <div className="mb-4">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
