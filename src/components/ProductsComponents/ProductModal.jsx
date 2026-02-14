import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import "./productmodal.css";
import CommonButton from "../common/CommonButton/CommonButton";

function ProductModal({ product, onClose }) {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [product]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-6 p-6 mt-5 md:mt-0">
          {/* Image */}
          <div className="w-full  md:sticky md:top-6 self-start">
            <img
              src={product.ImageURL}
              alt={product.ProductName}
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 justify-between flex-col">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 2000);
                }}
                className="text-gray-500 hover:text-black z-10 flex justify-end"
              >
                {isCopied ? (
                  <CommonButton text="Link Copied!" variant="primary" />
                ) : (
                  <CommonButton text="Copy Link" variant="primary" />
                )}
              </button>
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {product.ProductName}
              </h2>

              <p className="text-sm text-gray-600 italic">
                {product.ScientificName}
              </p>

              <div className="text-sm">
                <span className="font-semibold">Common Name:</span>{" "}
                {product.CommonName}
              </div>

              <div className="text-sm">
                <span className="font-semibold">Standardized Grade:</span>{" "}
                {product.StandardizedGrade}
              </div>

              <div className="text-sm">
                <span className="font-semibold">Analytical Method:</span>{" "}
                {product.AnalyticalMethod}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mt-2">
                {product.Description}
              </p>

              <div className="mt-3">
                <h4 className="font-semibold mb-1">Function</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {product.Function}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
