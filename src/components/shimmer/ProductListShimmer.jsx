
const ProductListShimmer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="w-full max-w-sm rounded-lg border border-gray-300 p-4 shadow-md">
            <div key={index} className="animate-pulse space-y-4">
              <div className="h-40 w-full rounded-lg bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200"></div>
              <div className="h-10 w-full rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListShimmer;
