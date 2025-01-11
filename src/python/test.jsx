import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Importing CanvasJS from the CDN to avoid issues with the module system
// You can also download and import the file locally if preferred
const CanvasJS = window.CanvasJS;

const SweaterData = () => {
  const [sweaterData, setSweaterData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch the data from the Flask API
    const fetchSweaterData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/filter-sweater?start_date=2018-10-11&input_file=filtered_data.csv');
        setSweaterData(response.data);

        // Prepare data for CanvasJS
        const formattedData = response.data.map(item => {
          // Convert t_dat string to a valid Date object
          const date = new Date(item.t_dat); // Assuming t_dat is in a format like "YYYY-MM-DD"
          return { x: date, y: item.product_sales }; // Return as an object with x and y for CanvasJS
        });

        // Set the chart data
        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching sweater data:', error);
      }
    };

    fetchSweaterData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      // Create the chart once data is loaded
      const chart = new CanvasJS.Chart('chartContainer', {
        title: {
          text: 'Sweater Sales Over Time'
        },
        axisX: {
          title: 'Date',
          valueFormatString: 'YYYY-MM-DD', // Format for X axis
        },
        axisY: {
          title: 'Product Sales',
        },
        data: [{
          type: 'line',
          dataPoints: chartData, // Using the prepared data
        }]
      });

      // Render the chart
      chart.render();
    }
  }, [chartData]);

  return (
    <div>
      <h1>Sweater Data</h1>
      <div id="chartContainer" style={{ height: '370px', width: '100%' }}></div>
    </div>
  );
};

export default SweaterData;
