function CommonButton({
  text = "Button",
  onClick,
  variant = "primary",
  fullWidth = false,
  className = "",
}) {
  const baseStyles =
    "inline-flex text-nowrap cursor-pointer items-center justify-center px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-white hover:text-primary border hover:border-primary",
    outline:
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant] || variants.primary}
        ${fullWidth ? "w-full" : "w-fit"}
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default CommonButton;
