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
    <div className="bg-gray-300 p-8 rounded-lg mb-3">
      <h2 className="text-2xl font-bold mb-4">Feels Like</h2>
      <p className="text-xl mb-2 font-bold">{feelsLikeTemperature}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default FeelsLike;
