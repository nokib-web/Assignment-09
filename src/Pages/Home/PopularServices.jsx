
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const PopularServices = () => {
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



  return (
    <div className="py-12 rounded-xl bg-base-300">
      {/*  PopularServices List Section */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2C1B0E] mb-15" data-aos="fade-up">
          Our Pet Care PopularServices
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-gray-600 min-h-16 mt-2 text-sm">{service.description}</p>
               <Link to={'/booking'}>
                <button className="mt-4 w-full  bg-[#c78947] text-white py-2 rounded-xl hover:bg-[#4b3218]   transition">
                  Book Now
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PopularServices;
