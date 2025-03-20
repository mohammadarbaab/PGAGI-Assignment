import React from "react";
import { FaWind } from "react-icons/fa";

const WindSpeed = ({ windSpeed }) => {
  return (
<div className="bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 p-8 rounded-lg shadow-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <h2 className="text-3xl font-extrabold text-white mb-4">Wind Speed</h2>
  <div className="flex items-center justify-center text-white">
    <FaWind className="w-8 h-8 mr-4 text-white/90" />
    <p className="text-2xl font-bold">{windSpeed} m/s</p>
  </div>
</div>

  );
};

export default WindSpeed;
