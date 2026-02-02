function ProductSmallCard({ data, onClick }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onClick={onClick}
        className=" relative group bg-green-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col max-w-[300px] cursor-pointer"
      >
        <div className="h-[190px] w-full max-w-[300px] overflow-hidden ">
          <img
            src={data.ImageURL}
            alt={data.ProductName}
            className="w-full h-[190px] object-cover 
               transition-transform duration-700 ease-out
               group-hover:scale-110 group-hover:rotate-1 "
          />
          <div
            className="absolute inset-0  opacity-0 
               transition-opacity duration-700
               group-hover:opacity-100"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3
            className="text-xl font-bold text-gray-900 mb-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {data.ProductName}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-3">
            {data.Description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductSmallCard;
