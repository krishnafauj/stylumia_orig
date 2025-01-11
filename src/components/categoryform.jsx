import React, { useState } from 'react';
import './sidebar.css';

function ComparisonForm() {
    const [selectedCategory1, setSelectedCategory1] = useState('');
    const [selectedCategory2, setSelectedCategory2] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [error, setError] = useState('');

    const handleCategoryChange = (category, categoryNumber) => {
        if (categoryNumber === 1) {
            setSelectedCategory1(category);
        } else {
            setSelectedCategory2(category);
        }
    };

    const handleDurationChange = (duration) => {
        setSelectedDuration(duration);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleApply = async () => {
        // Check if all fields are filled
        if (!selectedCategory1 || !selectedCategory2 || !selectedDuration || !selectedDate) {
            setError('All fields are required.');
            return;
        }
    
        // If all fields are filled, proceed with the logic
        setError(''); // Clear error if validation passes
    
        const payload = {
            category1: selectedCategory1,
            category2: selectedCategory2,
            duration: selectedDuration,
            date: selectedDate,
        };
    
        console.log('Sending payload:', payload);
    
        try {
            const response = await fetch('http://127.0.0.1:5000/compare', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            // Only call response.json() once
            const data = await response.json();  // Parse the JSON response
    
            console.log('Response status:', response.status);  // Log the status code
            console.log('Response body:', data); // Log the response body (data)
    
            if (response.ok) {
                alert(`API response: ${JSON.stringify(data)}`);
            } else {
                setError(`Error: ${data.message}`);  // Use the parsed data here
            }
        } catch (error) {
            console.error("Request failed:", error);  // Log the error if the request fails
            setError(`Error: ${error.message}`);
        }
    };
    

    return (
        <div className="flex items-center justify-center space-x-4 p-6 text-white">
            {/* Category Selection (Two Input Fields) */}
            <select
                value={selectedCategory1}
                onChange={(e) => handleCategoryChange(e.target.value, 1)}
                className="px-4 py-2 rounded bg-gray-700 text-white"
            >
                <option value="">Select Category 1</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear & Accessories">Footwear & Accessories</option>
                <option value="Home & Other Goods">Home & Other Goods</option>
                <option value="Undergarments">Undergarments</option>
            </select>

            <select
                value={selectedCategory2}
                onChange={(e) => handleCategoryChange(e.target.value, 2)}
                className="px-4 py-2 rounded bg-gray-700 text-white"
            >
                <option value="">Select Category 2</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear & Accessories">Footwear & Accessories</option>
                <option value="Home & Other Goods">Home & Other Goods</option>
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

            {/* Error Message */}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}

export default ComparisonForm;
