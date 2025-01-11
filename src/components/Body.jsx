import React from 'react';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className="flex flex-row justify-center mt-40  p-6 ">
      {/* Text Section */}
      <div className=" text-center space-y-6">
        <p className="text-4xl font-extrabold text-white">
          WE ANALYZE MARKET
        </p>
        <p className="text-2xl font-semibold text-indigo-600">
          Unlock Trends, Insights, and Data for Informed Decisions.
        </p>
        <p className="text-lg text-gray-500 italic">
          Make The Future Predictable With Our Advanced Tools.
        </p>
       <Link to="/Category">
       <button
          className="px-8 py-4 text-2xl mt-20 font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-2xl transition duration-300 ease-in-out"
        >
          Let’s Analyze
        </button>
       </Link>

      </div>
      <div>
        
      </div>
    
    </div>
  );
}

export default Body;
