import React from "react";

const HumidityInfo = ({ humadity }) => {
  let humadityDescription = "";
  if (humadity < 30) {
    humadityDescription = "Low Humadity. consider stying ";
  } else if (humadity > 70) {
    humadityDescription = "High Humadity. consider staying";
  } else {
    humadityDescription = "Normal Humadity";
  }
  return (
<div className="bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 p-8 rounded-lg shadow-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <h2 className="text-3xl font-bold text-white mb-4">Humidity</h2>
  <p className="text-4xl font-bold text-white mb-2">{humadity}%</p>
  <p className="text-lg text-white/90">{humadityDescription}</p>
</div>

  );
};

export default HumidityInfo;
