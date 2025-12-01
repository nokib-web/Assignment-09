import React, { useState } from "react";
import {
  FaStar,
  FaEnvelope,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTag,
  FaShieldAlt,
  FaHeart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router";

const DetailsCard = ({ detail }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    serviceName = "Loading...",
    providerName,
    providerEmail,
    price,
    rating = 0,
    reviewCount = 0,
    slotsAvailable,
    description,
    detailedDescription,
    image,
    gallery = [],
    category,
    subcategory,
    duration,
    location,
    tags = [],
    includes = [],
    featured,
    bestseller,
    availability,
  } = detail || {};

  const images = gallery.length > 0 ? gallery : [image];

  if (!detail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Main Card */}
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-amber-100">
        {/* Hero Image with Gallery Navigation */}
        <div className="relative group">
          <img
            src={images[currentImageIndex]}
            alt={serviceName}
            className="w-full h-96 md:h-[500px] object-cover"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {bestseller && (
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                Bestseller
              </span>
            )}
            {featured && (
              <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <FaStar className="text-yellow-300" /> Featured
              </span>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold">
            {category} {subcategory && `• ${subcategory}`}
          </div>

          {/* Gallery Arrows (visible on hover) */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"
              >
                <FaArrowRight />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Grid */}
        <div className="p-6 md:p-10 grid lg:grid-cols-3 gap-10">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#2C1B0E] leading-tight">
                {serviceName}
              </h1>
              <div className="flex items-center gap-4 mt-4 text-lg">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500 text-xl" />
                  <span className="font-bold">{rating}</span>
                  <span className="text-gray-500">({reviewCount} reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <FaCheckCircle />
                  <span>{slotsAvailable} slots left</span>
                </div>
              </div>
            </div>

            {/* Descriptions */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
              {detailedDescription && (
                <p className="text-gray-600 leading-relaxed bg-amber-50 p-6 rounded-2xl border border-amber-200">
                  {detailedDescription}
                </p>
              )}
            </div>

            {/* Includes */}
            {includes.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[#2C1B0E] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-amber-600" /> What's Included
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#2C1B0E] mb-3">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      <FaTag className="inline mr-1" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 font-medium">Starting at</p>
                  <h2 className="text-5xl font-black text-amber-800">{price}</h2>
                  {duration && (
                    <p className="text-gray-600 mt-2 flex items-center gap-2">
                      <FaClock /> {duration}
                    </p>
                  )}
                </div>

                {location && (
                  <p className="flex items-center gap-3 text-gray-700">
                    <FaMapMarkerAlt className="text-amber-700" />
                    <span className="font-medium">{location}</span>
                  </p>
                )}

                <div className="divider my-6"></div>

                <div className="space-y-4">
                  <Link to="/booking">
                    <button className="w-full btn btn-lg bg-gradient-to-r from-[#8B4513] to-[#A0522D] hover:from-[#A0522D] hover:to-[#774615] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <FaCalendarAlt className="mr-2" /> Book Now
                    </button>
                  </Link>

                  <Link to="/">
                    <button className="w-full btn btn-ghost border-2 border-amber-300 text-amber-800 hover:bg-amber-100 font-semibold rounded-2xl">
                      Back to Services
                    </button>
                  </Link>
                </div>

                {/* Provider Info */}
                <div className="bg-white/70 rounded-2xl p-5 border border-amber-200">
                  <h4 className="font-bold text-[#2C1B0E] mb-2">Provider</h4>
                  <p className="font-semibold">{providerName}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <FaEnvelope /> {providerEmail}
                  </p>
                </div>

                {availability && (
                  <p className="text-center text-sm text-gray-500 italic">
                    Available: {Array.isArray(availability) ? availability.join(" • ") : availability}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;