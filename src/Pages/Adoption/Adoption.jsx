// src/pages/Adoption.jsx
import React, { useState, useEffect, useMemo } from "react";

const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    species: [],
    gender: [],
    age: [],
    size: [],
  });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const openModal = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  useEffect(() => {
    fetch("/adoptable-pets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load pets");
        return res.json();
      })
      .then((data) => {
        setPets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filterOptions = {
    species: ["Dog", "Cat", "Rabbit"],
    gender: ["Male", "Female"],
    age: ["Puppy/Kitten", "Young", "Adult", "Senior"],
    size: ["Small", "Medium", "Large"],
  };

  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const filteredPets = useMemo(() => {
    let result = [...pets];
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (pet) =>
          pet.name.toLowerCase().includes(term) ||
          pet.breed.toLowerCase().includes(term)
      );
    }
    if (filters.species.length > 0)
      result = result.filter((pet) => filters.species.includes(pet.species));
    if (filters.gender.length > 0)
      result = result.filter((pet) => filters.gender.includes(pet.gender));
    if (filters.age.length > 0)
      result = result.filter((pet) => filters.age.includes(pet.ageGroup));
    if (filters.size.length > 0)
      result = result.filter((pet) => filters.size.includes(pet.size));
    return result;
  }, [pets, searchTerm, filters]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-[#2C1B0E]">Loading adorable pets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C1B0E] mb-4">
              Find Your Forever Friend
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All these beautiful pets are looking for loving homes. Adopt, don’t shop!
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or breed..."
                className="w-full px-6 py-4 pl-14 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c78947] focus:border-[#c78947]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-5 top-5 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-center mt-3 text-gray-600">
              {filteredPets.length} {filteredPets.length === 1 ? "pet" : "pets"} available
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-[#2C1B0E] mb-6">Filter Pets</h2>
                {Object.entries(filterOptions).map(([key, options]) => (
                  <div key={key} className="mb-7">
                    <h3 className="font-semibold text-[#2C1B0E] capitalize mb-3">{key}</h3>
                    <div className="space-y-2">
                      {options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer hover:text-[#c78947]">
                          <input
                            type="checkbox"
                            checked={filters[key].includes(option)}
                            onChange={() => toggleFilter(key, option)}
                            className="w-5 h-5 text-[#c78947] rounded focus:ring-[#c78947]"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {(Object.values(filters).some((arr) => arr.length > 0) || searchTerm) && (
                  <button
                    onClick={() => {
                      setFilters({ species: [], gender: [], age: [], size: [] });
                      setSearchTerm("");
                    }}
                    className="w-full mt-6 bg-[#c78947] hover:bg-[#b57a3d] text-white font-medium py-3 rounded-lg transition shadow-md"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </aside>

            {/* Pet Grid */}
            <div className="lg:col-span-3">
              {filteredPets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredPets.map((pet) => (
                    <div
                      key={pet.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                    >
                      <div className="relative">
                        <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${pet.gender === "Male" ? "bg-blue-600" : "bg-pink-600"}`}>
                            {pet.gender === "Male" ? "Male" : "Female"}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#c78947] text-white">
                            {pet.ageGroup}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#2C1B0E]">{pet.name}</h3>
                        <p className="text-lg text-gray-700">{pet.breed}</p>
                        <p className="text-sm text-gray-500 mt-1">{pet.age} • {pet.size}</p>
                        <p className="mt-4 text-gray-700">{pet.description}</p>

                        <div className="flex flex-wrap gap-2 mt-5">
                          {pet.vaccinated && (
                            <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">Vaccinated</span>
                          )}
                          {pet.neutered && (
                            <span className="text-xs bg-[#c78947]/10 text-[#c78947] px-3 py-1 rounded-full font-medium">Neutered/Spayed</span>
                          )}
                        </div>

                        <button
                          onClick={() => openModal(pet)}
                          className="mt-6 w-full bg-[#c78947] hover:bg-[#b57a3d] text-white font-bold py-4 rounded-xl transition shadow-lg transform hover:scale-105"
                        >
                          I'm Interested
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                  <p className="text-2xl font-medium text-[#2C1B0E]">No pets match your filters right now.</p>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filters!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && selectedPet && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto animate-in fade-in zoom-in duration-200">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#2C1B0E]">Adoption Inquiry</h2>
                  <p className="text-gray-600 mt-2">You're interested in:</p>
                  <p className="text-2xl font-semibold text-[#c78947]">{selectedPet.name}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-3xl"
                >
                  ×
                </button>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#2C1B0E] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c78947] focus:border-[#c78947] outline-none transition"
                    placeholder="Nazmul Hasan Nokib"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C1B0E] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c78947] focus:border-[#c78947] outline-none transition"
                    placeholder="nokib@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C1B0E] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c78947] focus:border-[#c78947] outline-none transition"
                    placeholder="+88019 3123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C1B0E] mb-1">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c78947] focus:border-[#c78947] outline-none transition resize-none"
                    placeholder="Tell us why you'd be a great pet parent..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#c78947] hover:bg-[#b57a3d] text-white font-bold py-4 rounded-xl transition shadow-lg transform hover:scale-105"
                  >
                    Send Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Adoption;