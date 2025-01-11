import React, { useState } from 'react';
import axios from 'axios';

const CompareData = () => {
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(0);
    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            date,
            duration,
            category1,
            category2
        };

        try {
            // Replace with the correct URL of your Flask backend
            const response = await axios.post('http://localhost:5000/compare', requestData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            console.log(response.data); // Log the entire response for debugging
            setResult(response.data.data);  // Store the result in state
            setError(null);  // Clear any previous errors
        } catch (err) {
            setError("Error fetching data: " + (err.response ? err.response.data.error : err.message));
            setResult(null);
        }
    };

    return (
        <div>
            <h2>Compare Data</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
                <div>
                    <label>Category 1:</label>
                    <input type="text" value={category1} onChange={(e) => setCategory1(e.target.value)} />
                </div>
                <div>
                    <label>Category 2:</label>
                    <input type="text" value={category2} onChange={(e) => setCategory2(e.target.value)} />
                </div>
                <button type="submit">Compare</button>
            </form>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {result && (
                <div>
                    <h3>Results:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default CompareData;
