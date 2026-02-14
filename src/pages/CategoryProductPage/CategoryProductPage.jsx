import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ProductSmallCard from "../../components/ProductsComponents/ProductSmallCard";
import { useEffect, useState } from "react";
import { ProductData } from "../../helpers/productData";
import ProductModal from "../../components/ProductsComponents/ProductModal";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import SectionWrapper from "../../components/common/SectionWrapper/SectionWrapper";

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
      <section className="bg-[#eaf4ec] w-full py-12 md:py-20">
        <div className="w-[100%]">
          <div className="flex flex-col gap-10 items-center">
            <div className="w-full lg:w-3xl flex flex-col items-center justify-center">
              <p className="text-[18px] font-bold text-primary tracking-wide mb-3">
                Get In Touch
              </p>

              <h2
                className="text-center text-3xl sm:text-4xl font-bold mb-[20px] text-gray-900"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                If you can’t find what you’re looking for, feel free to connect
                with us directly.
              </h2>
              <CommonButton
                text="Contact Us"
                variant="primary"
                onClick={() => navigate("/contact-us")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryProductPage;
