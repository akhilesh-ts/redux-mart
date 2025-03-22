const FeatureCardShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-md animate-pulse"
        >
          <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

          <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded"></div>

          <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded"></div>

          <div className="mt-3 flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className="h-3 w-3 bg-gray-200 rounded-full"
              ></div>
            ))}
          </div>

          <div className="mt-4 h-10 w-full bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCardShimmer;
