const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-150 p-5 cursor-pointer">
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-normal text-center line-clamp-2 min-h-[48px]">
          {product?.title}
        </h2>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center text-yellow-500 text-lg gap-1">
            ⭐ <span className="text-black"> {product?.rating?.rate}</span>
          </div>
          <p className="text-lg font-normal text-black">₹{product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
