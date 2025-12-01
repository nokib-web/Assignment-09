

const WinterCareTips = () => {
  const winterTips = [
    {
      id: 1,
      title: "Keep Them Warm",
      description:
        "Ensure your pets stay cozy indoors during cold weather. Use warm blankets and pet-safe heating pads if necessary.",
      image:
        "https://i.ibb.co.com/vChHzDTp/1.jpg"
    },
    {
      id: 2,
      title: "Protect Their Paws",
      description:
        "Snow, ice, and salt can harm your pet’s paws. Clean them after walks and use protective booties if possible.",
      image:
        "https://i.ibb.co.com/xqvcPkc2/2.webp"
    },
    {
      id: 3,
      title: "Maintain a Healthy Diet",
      description:
        "Cold weather burns more calories. Ensure your pets have nutritious meals and access to fresh water at all times.",
      image:
        "https://i.ibb.co.com/60szMN8w/6.jpg"
    }
  ];

  return (
    <section className="py-12  mx-auto rounded-xl bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Winter Care Tips for Pets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {winterTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
