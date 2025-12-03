import React, { useState, useMemo, useCallback } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../Home/ServiceCard";



import { 
    FiSearch,      
    
    FiFilter,      
    
    FiCheck,       
    
    FiX,           
    
    FiTag,         
    
    FiZap          
} from 'react-icons/fi'; 


const AllServices = () => {
  const data = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); 

  // AVAILABLE FILTER OPTIONS
  const categoryOptions = [
    "Clothing",
    "Winter Apparel",
    "Grooming",
    "Care",
    "Accessories",
  ];

  const sortOptions = useMemo(() => [
    { value: "price-low", label: "Price: Low → High" },
    { value: "price-high", label: "Price: High → Low" },
    { value: "name-asc", label: "Name: A → Z" },
    { value: "name-desc", label: "Name: Z → A" },
  ], []);

  // HANDLERS
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }, []);

  const handleSortChange = useCallback((value) => {
    setSelectedSort((prev) => (prev === value ? "" : value));
  }, []);

  const handleClearAll = useCallback(() => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedSort("");
  }, []);

  const selectedSortLabel = useMemo(() => {
    return sortOptions.find(opt => opt.value === selectedSort)?.label;
  }, [selectedSort, sortOptions]);


  // PROCESS DATA WITH FILTERS & SORTING
  const filteredServices = useMemo(() => {
    let filtered = [...data];

    // 1. Search filter 
    
    if (searchTerm.trim() !== "") {
      const t = searchTerm.toLowerCase();
      filtered = filtered.filter((service) => {
        return (
          service?.serviceName?.toLowerCase().includes(t) ||
          service?.description?.toLowerCase().includes(t) ||
          service?.providerName?.toLowerCase().includes(t) ||
          service?.category?.toLowerCase().includes(t) ||
          service?.tags?.some((tag) => tag.toLowerCase().includes(t))
        );
      });
    }

    // 2. Category filter 
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((service) =>
        selectedCategories.includes(service?.category)
      );
    }

    // 3. Sorting 
    
    if (selectedSort === "price-low") {
      filtered.sort(
        (a, b) =>
          Number(a.price?.replace("$", "") || 0) - Number(b.price?.replace("$", "") || 0)
      );
    } else if (selectedSort === "price-high") {
      filtered.sort(
        (a, b) =>
          Number(b.price?.replace("$", "") || 0) - Number(a.price?.replace("$", "") || 0)
      );
    } else if (selectedSort === "name-asc") {
      filtered.sort((a, b) =>
        (a.serviceName || "").localeCompare(b.serviceName || "")
      );
    } else if (selectedSort === "name-desc") {
      filtered.sort((a, b) =>
        (b.serviceName || "").localeCompare(a.serviceName || "")
      );
    }

    return filtered;
  }, [data, searchTerm, selectedCategories, selectedSort]);


  
  
  
  

  // Filter Sidebar Content Component
  

  
  const FilterSidebarContent = ({ isMobile = false, closeMobile }) => (
    <div className={isMobile ? "p-6" : "p-6 lg:sticky lg:top-6"}>
      {isMobile && (
        <div className="flex justify-between items-center pb-4 mb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
          <button onClick={closeMobile} className="p-2 text-gray-600 hover:text-gray-900">
            <FiX className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Sort By */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          Sort By
        </h3>
        <div className="space-y-3">
          {sortOptions.map((sort) => (
            <div
              key={sort.value}
              className={`flex justify-between items-center cursor-pointer px-3 py-2 rounded-lg transition border ${
                selectedSort === sort.value
                  ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleSortChange(sort.value)}
            >
              <span className="text-gray-700">{sort.label}</span>
              {selectedSort === sort.value && (
                <FiCheck className="w-5 h-5 text-blue-600" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          Categories
        </h3>
        <div className="space-y-3">
          {categoryOptions.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
        {(selectedSort || selectedCategories.length > 0) && (
            <button
              onClick={handleClearAll}
              className="text-sm text-red-600 hover:text-red-800 underline mt-4"
            >
              Clear All Filters & Sort
            </button>
          )}
      </div>

      {/* Apply button for mobile */}
      {isMobile && (
        <div className="mt-8">
          <button
            onClick={closeMobile}
            className="w-full bg-[#c78947] text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#995915] transition"
          >
            Show {filteredServices.length} Results
          </button>
        </div>
      )}
    </div>
  );

  
  
  // END Filter Sidebar Content Component *
  
  
  


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C1B0E] mb-3">
            All Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and explore from our wide range of professional pet services
          </p>
        </div>

        {/* Search Bar - Full width, centered */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              className="w-full px-5 py-4 pr-12 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Search by name, provider, category, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* React Icon integration for Search */}
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Active Filters Display & Results Count */}
        <div className="flex flex-wrap items-center justify-between mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

            <div className="flex flex-wrap gap-2 text-sm">
                {selectedSort && (
                    <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        Sorted by: {selectedSortLabel}
                        <button onClick={() => setSelectedSort("")} className="ml-1 text-blue-600 hover:text-blue-800">
                            <FiX className="w-3 h-3" />
                        </button>
                    </span>
                )}
                {selectedCategories.map((category) => (
                    <span key={category} className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <FiTag className="w-3 h-3" /> {category}
                        <button onClick={() => handleCategoryChange(category)} className="ml-1 text-green-600 hover:text-green-800">
                            <FiX className="w-3 h-3" />
                        </button>
                    </span>
                ))}
                {(selectedSort || selectedCategories.length > 0 || searchTerm) && (
                    <button
                        onClick={handleClearAll}
                        className="text-red-600 hover:text-red-800 font-medium px-3 py-1 rounded-full border border-red-300 transition"
                    >
                        Clear All
                    </button>
                )}
            </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Hidden on mobile, shown on lg+ */}
          <aside className="lg:col-span-1 order-2 lg:order-1 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl">
              <FilterSidebarContent />
            </div>
          </aside>

          {/* Services Grid */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.serviceId} service={service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-xl border-dashed border-2 border-gray-300">
                <div className="max-w-md mx-auto">
                  {/* React Icon integration for No Results */}
                  <FiZap className="w-16 h-16 text-gray-400 mx-auto mb-6" /> 
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    No services found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search term or clearing some of your active filters to see more results.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Button (visible only on small screens) */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-[#c78947] text-white px-8 py-4 rounded-full shadow-lg font-medium text-lg hover:bg-[#7c4c18] transition flex items-center gap-2 transform active:scale-95"
          >
            {/* React Icon integration for Filter Button */}
            <FiFilter className="w-5 h-5" />
            Filters
            {(selectedSort || selectedCategories.length > 0) && (
                <span className="ml-1 bg-white text-blue-600 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                    {selectedCategories.length + (selectedSort ? 1 : 0)}
                </span>
            )}
          </button>
        </div>

        {/* Mobile Filter Modal (Slide-over panel) */}
        {isFilterModalOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsFilterModalOpen(false)} />
              
              {/* Panel */}
              <section className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <FilterSidebarContent isMobile={true} closeMobile={() => setIsFilterModalOpen(false)} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;