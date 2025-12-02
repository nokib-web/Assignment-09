import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaPaw } from "react-icons/fa";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

const slides = [
  {
    img: hero1,
    text: "Keep your pets warm this winter",
    btn: "Explore Care Tips",
  },
  {
    img: hero2,
    text: "Stylish comfort for every paw",
    btn: "Shop Winter Gear",
  },
  {
    img: hero3,
    text: "Because warmth means love",
    btn: "Get Started",
  },
];

const HeroSlider = () => {
  return (
    <section className=" my-10  max-h-140  lg:h-[60vh] rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full relative bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center text-white space-y-6">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight">
                  {slide.text}
                </h2>

                <button className="flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-[#E67E22] to-[#5A3D1E] hover:scale-105 transition-transform duration-300 shadow-md">
                  {slide.btn} <FaPaw className="text-xl" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
