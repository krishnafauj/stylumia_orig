import React, { useState } from "react";

const ProvsProducts = () => {
  // Define categories and corresponding product types
  const productData = {
    "Garment Upper body": ["Sweater", "T-shirt", "Blouse", "Top", "Vest top", "Shirt", "Jacket", "Hoodie", "Cardigan", "Blazer"],
    "Garment Lower body": ["Trousers", "Shorts", "Skirt", "Leggings/Tights", "Outdoor trousers"],
    "Garment Full body": ["Dress", "Jumpsuit/Playsuit", "Garment Set", "Dungarees", "Costumes", "Outdoor overall"],
    "Accessories": ["Bag", "Earring", "Scarf", "Necklace", "Sunglasses", "Other accessories", "Hair/alice band", "Belt", "Hat/beanie", "Ring"],
    "Underwear": ["Bra", "Underwear bottom", "Underwear body", "Robe", "Kids Underwear top", "Underdress", "Underwear set", "Nipple covers", "Long John", "Underwear corset"],
    "Swimwear": ["Swimwear bottom", "Bikini top", "Swimsuit", "Swimwear set", "Sarong", "Swimwear top"],
    "Shoes": ["Boots", "Sneakers", "Sandals", "Ballerinas", "Heeled sandals", "Pumps", "Flat shoe", "Other shoe", "Wedge", "Slippers"],
    "Socks & Tights": ["Socks", "Underwear Tights", "Leg warmers"],
    "Nightwear": ["Pyjama set", "Pyjama bottom", "Night gown", "Pyjama jumpsuit/playsuit"],
    "Bags": ["Backpack", "Weekend/Gym bag", "Tote bag", "Cross-body bag", "Shoulder bag", "Bumbag"],
    "Cosmetic": ["Fine cosmetics", "Chem. cosmetics"],
    "Furniture": ["Side table"]
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [selectedProductType2, setSelectedProductType2] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // Default date is today's date
  const [selectedDuration, setSelectedDuration] = useState("");
  const [error, setError] = useState("");

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setSelectedProductType(""); // Reset product type when category changes
  };

  // Handle product type change
  const handleProductTypeChange = (e) => {
    setSelectedProductType(e.target.value);
  };

  // Handle category change for the second product
  const handleCategoryChange2 = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory2(selectedValue);
    setSelectedProductType2(""); // Reset product type when category changes
  };

  // Handle product type change for the second product
  const handleProductTypeChange2 = (e) => {
    setSelectedProductType2(e.target.value);
  };

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Handle duration change
  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  // Apply selected durations and compare both products
  const handleApply = () => {
    // Check if all fields are filled
    if (!selectedCategory || !selectedProductType || !selectedDuration || !selectedDate || !selectedCategory2 || !selectedProductType2) {
      setError('All fields are required.');
      return;
    }

    // If all fields are filled, proceed with the logic
    setError(''); // Clear error if validation passes
    alert(`Product 1:
      Category: ${selectedCategory}, 
      Product Type: ${selectedProductType}, 
      Duration: ${selectedDuration}, 
      Date: ${selectedDate}
    Product 2:
      Category: ${selectedCategory2}, 
      Product Type: ${selectedProductType2}, 
      Duration: ${selectedDuration}, 
      Date: ${selectedDate}`);
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-6 text-white">
      {/* First Product Selection */}
      <div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          <option value="">Select Category</option>
          {Object.keys(productData).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedProductType}
          onChange={handleProductTypeChange}
          className="px-4 py-2 rounded bg-gray-700 text-white"
          disabled={!selectedCategory}
        >
          <option value="">Select Product Type</option>
          {selectedCategory &&
            productData[selectedCategory]?.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
        </select>
      </div>

      {/* Second Product Selection */}
      <div>
        <select
          value={selectedCategory2}
          onChange={handleCategoryChange2}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          <option value="">Select Category</option>
          {Object.keys(productData).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedProductType2}
          onChange={handleProductTypeChange2}
          className="px-4 py-2 rounded bg-gray-700 text-white"
          disabled={!selectedCategory2}
        >
          <option value="">Select Product Type</option>
          {selectedCategory2 &&
            productData[selectedCategory2]?.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
        </select>
      </div>

      {/* Duration Selection (Shared for Both Products) */}
      <select
        value={selectedDuration}
        onChange={handleDurationChange}
        className="px-4 py-2 rounded bg-gray-700 text-white"
      >
        <option value="">Select Duration</option>
        <option value="1">1 Day</option>
        <option value="7">7 Days</option>
        <option value="15">15 Days</option>
        <option value="30">30 Days</option>
        <option value="60">60 Days</option>
        <option value="90">90 Days</option>
        <option value="150">150 Days</option>
        <option value="300">300 Days</option>
        <option value="365">365 Days</option>
      </select>

      {/* Date Picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="px-4 py-2 rounded bg-gray-700 text-white"
      />

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="px-6 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
      >
        Apply
      </button>

      {/* Show Error Message */}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default ProvsProducts;
