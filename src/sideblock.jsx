import React, { useState } from 'react';

const Sideblock = () => {
  // Data structure
  const data = [
    { category: "Garment Upper body", subcategory: "Sweater" },
    { category: "Garment Upper body", subcategory: "T-shirt" },
    { category: "Garment Upper body", subcategory: "Blouse" },
    { category: "Garment Upper body", subcategory: "Top" },
    { category: "Garment Upper body", subcategory: "Vest top" },
    { category: "Garment Upper body", subcategory: "Shirt" },
    { category: "Garment Upper body", subcategory: "Jacket" },
    { category: "Garment Upper body", subcategory: "Hoodie" },
    { category: "Garment Upper body", subcategory: "Cardigan" },
    { category: "Garment Upper body", subcategory: "Blazer" },
    { category: "Garment Lower body", subcategory: "Trousers" },
    { category: "Garment Lower body", subcategory: "Shorts" },
    { category: "Garment Lower body", subcategory: "Skirt" },
    { category: "Garment Lower body", subcategory: "Leggings/Tights" },
    { category: "Garment Lower body", subcategory: "Outdoor trousers" },
    { category: "Garment Full body", subcategory: "Dress" },
    { category: "Garment Full body", subcategory: "Jumpsuit/Playsuit" },
    { category: "Garment Full body", subcategory: "Garment Set" },
    { category: "Garment Full body", subcategory: "Dungarees" },
    { category: "Garment Full body", subcategory: "Costumes" },
    { category: "Garment Full body", subcategory: "Outdoor overall" },
    { category: "Accessories", subcategory: "Bag" },
    { category: "Accessories", subcategory: "Earring" },
    { category: "Accessories", subcategory: "Scarf" },
    { category: "Accessories", subcategory: "Necklace" },
    { category: "Accessories", subcategory: "Sunglasses" },
    { category: "Accessories", subcategory: "Other accessories" },
    { category: "Accessories", subcategory: "Hair/alice band" },
    { category: "Accessories", subcategory: "Belt" },
    { category: "Accessories", subcategory: "Hat/beanie" },
    { category: "Accessories", subcategory: "Ring" },
    { category: "Underwear", subcategory: "Bra" },
    { category: "Underwear", subcategory: "Underwear bottom" },
    { category: "Underwear", subcategory: "Underwear body" },
    { category: "Underwear", subcategory: "Robe" },
    { category: "Underwear", subcategory: "Kids Underwear top" },
    { category: "Underwear", subcategory: "Underdress" },
    { category: "Underwear", subcategory: "Underwear set" },
    { category: "Underwear", subcategory: "Nipple covers" },
    { category: "Underwear", subcategory: "Long John" },
    { category: "Underwear", subcategory: "Underwear corset" },
    { category: "Swimwear", subcategory: "Swimwear bottom" },
    { category: "Swimwear", subcategory: "Bikini top" },
    { category: "Swimsuit", subcategory: "Swimsuit" },
    { category: "Swimwear", subcategory: "Swimwear set" },
    { category: "Swimwear", subcategory: "Sarong" },
    { category: "Swimwear", subcategory: "Swimwear top" },
    { category: "Shoes", subcategory: "Boots" },
    { category: "Shoes", subcategory: "Sneakers" },
    { category: "Shoes", subcategory: "Sandals" },
    { category: "Shoes", subcategory: "Ballerinas" },
    { category: "Shoes", subcategory: "Heeled sandals" },
    { category: "Shoes", subcategory: "Pumps" },
    { category: "Shoes", subcategory: "Flat shoe" },
    { category: "Shoes", subcategory: "Other shoe" },
    { category: "Shoes", subcategory: "Wedge" },
    { category: "Shoes", subcategory: "Slippers" },
    { category: "Socks & Tights", subcategory: "Socks" },
    { category: "Socks & Tights", subcategory: "Underwear Tights" },
    { category: "Socks & Tights", subcategory: "Leg warmers" },
    { category: "Nightwear", subcategory: "Pyjama set" },
    { category: "Nightwear", subcategory: "Pyjama bottom" },
    { category: "Nightwear", subcategory: "Night gown" },
    { category: "Nightwear", subcategory: "Pyjama jumpsuit/playsuit" },
    { category: "Bags", subcategory: "Backpack" },
    { category: "Bags", subcategory: "Weekend/Gym bag" },
    { category: "Bags", subcategory: "Tote bag" },
    { category: "Bags", subcategory: "Cross-body bag" },
    { category: "Bags", subcategory: "Shoulder bag" },
    { category: "Bags", subcategory: "Bumbag" },
    { category: "Cosmetic", subcategory: "Fine cosmetics" },
    { category: "Cosmetic", subcategory: "Chem. cosmetics" },
    { category: "Furniture", subcategory: "Side table" },
  ];
  //Group by category
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // State to manage open categories
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="h-[655px] w-[300px] flex flex-col mt-10 ml-2">
      <div
        style={{ width: 265, height: 665, overflowY: "auto" }}
        className=" bg-grey-100 shadow-lg rounded-md p-4"
      >
        {Object.keys(groupedData).map((category) => (
          <div key={category} className="mb-1">
            {/* Category Header */}
            <div
             className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white cursor-pointer rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"

              onClick={() => toggleCategory(category)}
            >
              <span className="font-semibold">{category}</span>
              <span>{openCategory === category ? '^' : 'v'}</span>
            </div>

            {/* Subcategories */}
            {openCategory === category && (
              <div className=" text-black" >
                {groupedData[category].map((item) => (
                  <div
                    key={item.subcategory}
                    className="flex items-center px-2  bg-gray-800 hover:text-black trounded-md  hover:bg-gray-200 transition"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 accent-blue-600  hover:text-black"
                      id={item.subcategory}
                    />
                    <label htmlFor={item.subcategory} className="  text-white  hover:text-black">
                      {item.subcategory}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sideblock;