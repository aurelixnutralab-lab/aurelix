import { AppImages } from "../../assets/images/image";

function ProductCard() {
  const cards = [
    {
      id: 1,
      title: "Ayurvedic & ethnic",
      description:
        "Rooted in time-honored Ayurvedic traditions, this range features authentic, ethically sourced herbs and botanicals. Each ingredient is carefully selected and minimally processed to preserve its natural potency and holistic benefits.",
      image: AppImages.popularAyurvedicAthenic,
    },
    {
      id: 2,
      title: "Superfoods & global wellness",
      description:
        "A curated selection of powerful superfoods sourced from across the globe. These nutrient-dense ingredients are chosen to complement modern wellness lifestyles, supporting balance, vitality, and everyday nutritional excellence.",
      image: AppImages.popularSuperFoods,
    },
    {
      id: 3,
      title: "Enhanced vitality & performance boost",
      description:
        "Formulated to support strength, stamina, and peak performance, this range combines traditional wisdom with functional nutrition. Designed for active lifestyles, these ingredients help fuel energy, endurance, and overall physical resilience.",
      image: AppImages.popularEnhanceVitality,
    },
  ];

  return (
    <section className="bg-white pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
