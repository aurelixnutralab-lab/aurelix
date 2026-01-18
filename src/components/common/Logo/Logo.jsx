function Logo({ size = "md" }) {
  const isLarge = size === "lg";

  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div
        className={`
          flex items-center justify-center rounded-full font-bold
          ${isLarge ? "w-12 h-12 text-xl bg-primary text-white" : "w-12 h-12 text-lg bg-primary text-white border-2 border-white"}
        `}
      >
        <span className="text-xl">🌿</span>
      </div>

      {/* Brand Name (only for large logo) */}
      {isLarge && (
        <span className="font-semibold text-xl text-primary">Aurelix</span>
      )}
    </div>
  );
}

export default Logo;
