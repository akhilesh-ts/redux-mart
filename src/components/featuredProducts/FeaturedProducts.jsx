import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import ProductCard from "../productCard/ProductCard";
import { AlertTriangle } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = useSelector(
    (state) => state.product.featuredProducts
  );

  return (
    <div>
      <div className="py-12 px-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Featured Products
        </h2>
        {featuredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {featuredProducts.slice(0, 4).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <AlertTriangle className="text-gray-500 w-12 h-12 mx-auto" />
            <p className="text-gray-600 mt-4">No Products Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
