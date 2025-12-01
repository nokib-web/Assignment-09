
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      id: 1,
      name: "Pet Grooming",
      image: "https://i.ibb.co.com/xKTv5cxX/7.jpg",
      description:
        "Professional bathing, trimming, and fur styling to keep your pet clean and healthy.",
    },
    {
      id: 2,
      name: "Vet Consultation",
      image: "https://i.ibb.co.com/hx0pXVhC/images.jpg",
      description:
        "Experienced veterinarians offering both online and in-person health check-ups.",
    },
    {
      id: 3,
      name: "Pet Boarding",
      image: "https://i.ibb.co.com/XZZ6B550/8.jpg",
      description:
        "Safe, fun, and comfortable boarding for your pet while you’re away.",
    },
    {
      id: 4,
      name: "Pet Training",
      image: "https://i.ibb.co.com/1JT0TM66/4.webp",
      description:
        "Improve obedience and behavior with our expert pet trainers.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Rahman",
      feedback:
        "The grooming service was excellent! My dog looks and smells amazing 🐕",
      rating: 5,
    },
    {
      id: 2,
      name: "Hasan Ali",
      feedback:
        "Very caring and professional staff. The vet consultation helped my cat recover quickly!",
      rating: 5,
    },
    {
      id: 3,
      name: "Mita Khatun",
      feedback:
        "My puppy enjoyed the boarding stay — they even sent me photos every day!",
      rating: 4.8,
    },
  ];

  return (
    <div className="py-12 bg-base-100">
      {/*  Services List Section */}
      <section className=" mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2C1B0E] mb-10" data-aos="fade-up">
          Our Pet Care Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
               <Link to={'/booking'}>
                <button className="mt-4 w-full  bg-[#c78947] text-white py-2 rounded-xl hover:bg-[#4b3218]   transition">
                  Book Now
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mt-20">
        <h2 className="text-3xl font-bold text-[#2C1B0E] mb-8" data-aos="fade-up">
          Why Choose Us
        </h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700"
          data-aos="fade-up"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg">🐾 Certified Experts</h3>
            <p className="text-sm mt-2">
              Our professionals are licensed and trained to care for your pets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg">🏠 Safe Environment</h3>
            <p className="text-sm mt-2">
              Clean, hygienic, and comfortable facilities for all pets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg">🕓 24/7 Support</h3>
            <p className="text-sm mt-2">
              Emergency help and expert advice available any time you need.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg">🌿 Eco-Friendly</h3>
            <p className="text-sm mt-2">
              We use safe, organic, and sustainable products for your pets.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mt-20">
        <h2 className="text-3xl font-bold text-[#2C1B0E] mb-8" data-aos="fade-up">
           What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex justify-center mb-3 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 italic">“{review.feedback}”</p>
              <h4 className="mt-4 font-semibold text-[#2C1B0E]">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
