import React, { useState } from 'react';
import './sidebar.css';

function Catform() {
    const [selectedCategory1, setSelectedCategory1] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [error, setError] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory1(category);
    };

    const handleDurationChange = (duration) => {
        setSelectedDuration(duration);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleApply = () => {
        // Check if all fields are filled
        if (!selectedCategory1 || !selectedDuration || !selectedDate) {
            setError('All fields are required.');
            return;
        }

        // If all fields are filled, proceed with the logic
        setError(''); // Clear error if validation passes
        alert(`Category: ${selectedCategory1}, Duration: ${selectedDuration}, Date: ${selectedDate}`);
    };

    return (
        <div className="flex items-center justify-center space-x-4 p-6 text-white">
            {/* Category Selection */}
            <select
                value={selectedCategory1}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-2 rounded bg-gray-700 text-white"
            >
                <option value="">Select Category</option>
                <option value="Garment Upper body">Garment Upper body</option>
                <option value="Garment Lower body">Garment Lower body</option>
                <option value="Garment Full body">Garment Full body</option>
                <option value="Accessories">Accessories</option>
                <option value="Underwear">Underwear</option>
                <option value="Swimwear">Swimwear</option>
                <option value="Shoes">Shoes</option>
                <option value="Socks & Tights">Socks & Tights</option>
                <option value="Nightwear">Nightwear</option>
                <option value="Unknown">Unknown</option>
                <option value="Bags">Bags</option>
                <option value="Items">Items</option>
                <option value="Cosmetic">Cosmetic</option>
                <option value="Underwear/nightwear">Underwear/nightwear</option>
                <option value="Furniture">Furniture</option>
                <option value="Garment and Shoe care">Garment and Shoe care</option>
                <option value="Stationery">Stationery</option>
                <option value="Interior textile">Interior textile</option>
                <option value="Fun">Fun</option>
            </select>

            {/* Duration Selection */}
            <select
                value={selectedDuration}
                onChange={(e) => handleDurationChange(e.target.value)}
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

            {/* Date Input */}
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
        </div>
    );
}

export default Catform;
