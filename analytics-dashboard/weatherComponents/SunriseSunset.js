import React from "react";
import moment from "moment";


const SunriseSunset = ({ sunrise, sunset }) => {
  return (
    <div className="bg-gray-300 p-8 rounded  mb-4">
      <h2 className="text-2x1 font-bold mb-4">Sunrise and Sunset</h2>{" "}
      <p className="text-1g mb-2">
        Sunrise: {moment.unix(sunrise).format("HH:mm")}
      </p>
      <p className="text-lg">Sunset: {moment.unix(sunset).format("HH:mm")}</p>{" "}
    </div>
  );
};
export default SunriseSunset;
