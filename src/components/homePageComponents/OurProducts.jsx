import ProductCard from "./ProductCard";

function OurProducts() {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-16 mx-auto ">
      <div className="w-[100%] flex flex-col items-center py-8 md:py-20">
        <p className="text-[18px] font-bold text-primary mb-4">
          Wellness Tailored For You
        </p>

        <h2
          className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 text-center"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Wellness Rooted in Nature & Innovation
        </h2>
        <ProductCard />
      </div>
    </section>
  );
}

export default OurProducts;
