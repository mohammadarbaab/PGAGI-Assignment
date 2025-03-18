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
    <div className="bg-gray-300 p-8 rounded-lg mb-3">
      <h2 className="text-2xl font-bold mb-4">Humadity</h2>
      <p className="text-xl mb-2 font-bold">{humadity}%</p>
      <p className="text-lg">{humadityDescription}</p>
    </div>
  );
};

export default HumidityInfo;
