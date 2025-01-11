import React, { useState } from 'react';
import './sidebar.css';

function CatvsSubform() {
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
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear & Accessories</option>
                <option value="Home">Home & Other Goods</option>
                <option value="Undergarments">Undergarments</option>
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

export default CatvsSubform;
