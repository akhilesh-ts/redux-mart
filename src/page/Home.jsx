import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ErrorMessage from "@/components/error/ErrorMessage";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import FeatureCardShimmer from "@/components/shimmer/FeatureCardShimmer";
import HeroShimmer from "@/components/shimmer/HeroSectionShimmer";
import useFetchFeaturedProduct from "@/hook/useFetchFeaturedProduct";

const Home = () => {
  
  const { loading, error } = useFetchFeaturedProduct();

  if (loading) {
    return (
      <>
        <HeroShimmer />
        <FeatureCardShimmer />
      </>
    );
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div className="w-full">
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

      <FeaturedProducts />
    </div>
  );
};

export default Home;
