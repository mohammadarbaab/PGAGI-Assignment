import { useState } from "react";
import Search from "./components/Search";
import Stock from "./components/Stock";

export default function Home() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Stock Market App
      </h1>

      {/* Search Component */}
      <div className="rounded-lg shadow-lg">
        <Search onSelectSymbol={setSelectedSymbol} />
      </div>

      {/* Stock Component */}
      {selectedSymbol && (
        <div className="w-full mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          <Stock symbol={selectedSymbol} />
        </div>
      )}
    </div>
  );
}
