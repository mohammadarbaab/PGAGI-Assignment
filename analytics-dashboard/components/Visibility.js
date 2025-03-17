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
    <div className="bg-gray-300 p-8 rounded-lg mb-2">
      <h2 className="text-2xl font-bold mb-4">Visibility</h2>
      <p className="text-lg mb-2">Current Visibility:{visibility} meters</p>
      <p className="text-lg">{visibilityDescription}</p>
    </div>
  );
};

export default VisibilityInfo;
