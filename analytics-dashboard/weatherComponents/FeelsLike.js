import React from "react";

const FeelsLike = ({ actualTemperature, feelsLikeTemperature }) => {
  const temperatureDifference = feelsLikeTemperature - actualTemperature;

  let description = "";
  if (temperatureDifference < 0) {
    description = "Feels color than the actual temperature";
  } else if (temperatureDifference > 0) {
    description = "Feels warmer than the actual temperature";
  } else {
    description = "Feels the same as the actual temperature";
  }
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl mb-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <h2 className="text-3xl font-bold mb-4 text-white">Feels Like</h2>
    <p className="text-4xl mb-2 font-bold text-white">{feelsLikeTemperature}°C</p>
    <p className="text-lg text-white/90">{description}</p>
  </div>
  
  );
};

export default FeelsLike;
