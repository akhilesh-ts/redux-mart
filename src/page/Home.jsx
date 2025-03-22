import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "@/components/productCard/ProductCard";
import useFetchProducts from "@/hook/useFetchProducts";
import ProductListShimmer from "@/components/shimmer/ProductListShimmer";
import ErrorMessage from "@/components/error/ErrorMessage";
import FeatureCardShimmer from "@/components/shimmer/FeatureCardShimmer";
import HeroShimmer from "@/components/shimmer/HeroSectionShimmer";


const Home = () => {
  const { loading, error } = useFetchProducts();
  const products = useSelector((state) => state.product.products);

  if (loading) {
    return (
      <>
      <HeroShimmer/>
       <FeatureCardShimmer/>
       
      </>
     
    )
    
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 px-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Best Products
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Shop the latest trends and exclusive collections.
        </p>
        <Link to="/product">
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
            Shop Now
          </Button>
        </Link>
      </div>

      

      {/* Featured Products */}
      <div className="py-12 px-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Featured Products</h2>
        {products.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.slice(0, 4).map((product) => (
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

export default Home;

