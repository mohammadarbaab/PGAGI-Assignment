import React from "react";

const VisibilityInfo = ({ visibility }) => {
  let visibilityDescription = "";
  if (visibility < 1000) {
    visibilityDescription = "Low Visibility";
  } else if (visibility >= 1000 && visibility < 5000) {
    visibilityDescription = "Moderate Visibility";
  } else {
    visibilityDescription = "High Visibility";
  }
  return (
    <div className="bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 p-8 rounded-lg shadow-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-3xl font-bold text-white mb-6">Visibility</h2>
    <p className="text-2xl text-white mb-2">Current Visibility: {visibility} meters</p>
    <p className="text-lg text-white/90">{visibilityDescription}</p>
  </div>
  
  );
};

export default VisibilityInfo;
