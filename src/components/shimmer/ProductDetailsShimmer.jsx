const ProductDetailShimmer = () => {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Image Placeholder */}
          <div className="h-96 w-full rounded-lg bg-gray-200"></div>
  
          {/* Right: Details Placeholder */}
          <div className="space-y-4">
            {/* Title Placeholder */}
            <div className="h-6 w-3/4 rounded bg-gray-200"></div>
  
            {/* Price Placeholder */}
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
  
            {/* Rating Placeholder */}
            <div className="flex gap-2">
              <div className="h-4 w-4 rounded bg-gray-200"></div>
              <div className="h-4 w-4 rounded bg-gray-200"></div>
              <div className="h-4 w-4 rounded bg-gray-200"></div>
              <div className="h-4 w-4 rounded bg-gray-200"></div>
              <div className="h-4 w-4 rounded bg-gray-200"></div>
            </div>
  
            {/* Description Placeholder */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-200"></div>
              <div className="h-4 w-5/6 rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>
  
            {/* Button Placeholder */}
            <div className="h-12 w-1/2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetailShimmer;
  