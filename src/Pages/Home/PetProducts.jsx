import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PetProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    {
      id: 1,
      name: "Organic Pet Shampoo",
      price: "$15",
      rating: 4.8,
      image:  "https://i.ibb.co.com/svv0bMKC/450x450-Pure-And-Natural-Pet-Category-Images.webp",
      description: "Keep your pet’s coat clean and shiny with our gentle organic formula."
    },
    {
      id: 2,
      name: "Healthy Dog Treats",
      price: "$10",
      rating: 4.9,
      image: "https://i.ibb.co.com/k6rJQzDg/images-1.jpg",


      description: "Tasty and nutritious snacks for your furry friend."
    },
    {
      id: 3,
      name: "Winter Pet Jacket",
      price: "$25",
      rating: 4.7,
      image: "https://i.ibb.co.com/prNtwqKY/puffer-for-page-1500x.webp", 
      description: "Keep your pets warm and comfortable this winter season."
    },
  ];

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold text-[#2C1B0E] mb-8"
          data-aos="fade-up"
        >
        Pet Products Recommendation
        </h2>
        <p className="text-gray-500 mb-10" data-aos="fade-up" data-aos-delay="100">
          Discover our most-loved pet care essentials — chosen by pet lovers like you!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 min-h-12  text-sm mt-1">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-primary font-bold">{product.price}</p>
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              <Link to={'/services'}>
                <button className="mt-4 w-full bg-[#c78947] text-white py-2 rounded-xl hover:bg-[#5a3c1c] transition">
                  Buy Now
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetProducts;
