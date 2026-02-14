function SpecialIngrediantCard({ image, title, description }) {
  return (
    <div className=" relative  bg-[var(--color-primary-light)] rounded-3xl  px-6 pt-16 pb-8  text-center shadow-[var(--shadow-soft)] max-w-sm min-w-[280px] w-[30%]">
      {/* Top Circular Image */}
      <div className=" absolute  -top-8 left-1/2  -translate-x-1/2 w-24  h-24  rounded-full  bg-white  flex  items-center  justify-center shadow-md">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 rounded-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <h3 className=" mt-4 text-xl  font-semibold  tracking-wide text-[var(--color-text-dark)] font-[var(--font-cormorant)]">
        {title}
      </h3>

      <p className=" mt-4  text-sm  leading-relaxed text-[var(--color-text-muted)] font-[var(--font-inter)]">
        {description}
      </p>
    </div>
  );
}

export default SpecialIngrediantCard;
