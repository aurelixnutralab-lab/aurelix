import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ProductSmallCard from "../../components/ProductsComponents/ProductSmallCard";
import { useEffect, useState } from "react";
import { ProductData } from "../../helpers/productData";
import ProductModal from "../../components/ProductsComponents/ProductModal";

function CategoryProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("pid");
  const [categoryData, setCategoryData] = useState(ProductData[id] || {});

  useEffect(() => {
    setCategoryData(ProductData[id] || {});
  }, [id]);

  if (categoryData == {} || !categoryData.data) {
    return <div>No Data Found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="relative w-full">
        <img
          src={categoryData.bannerImg}
          alt={categoryData.title}
          className="w-[100%] h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
        <h3
          className=" absolute inset-0
      flex items-center justify-center
      bg-black/50
      text-white
      text-center
      font-bold
      px-4
      text-2xl
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
      xl:text-6xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {categoryData.title}
        </h3>
      </div>
      <div className="p-[16px] md:p-20 flex flex-wrap gap-8 justify-center w-full">
        {categoryData.data.map((item) => (
          <ProductSmallCard
            key={item.id}
            data={item}
            onClick={() => {
              setSearchParams({ pid: item.id });
            }}
          />
        ))}
      </div>
      {/* Modal */}
      {productId && (
        <ProductModal
          product={
            categoryData.data.find((item) => item.id == productId) || null
          }
          onClose={() => {
            setSearchParams({});
          }}
        />
      )}
    </div>
  );
}

export default CategoryProductPage;
