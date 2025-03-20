import { useState } from "react";
import { searchStockSymbols } from "../../services/alphaVantage";

const Search = ({ onSelectSymbol }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const data = await searchStockSymbols(value);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    // <div>
    //   <input
    //     type="text"
    //     value={query}
    //     onChange={handleSearch}
    //     placeholder="Search for a stock symbol..."
    //   />
    //   <ul>
    //     {results.map((result) => (
    //       <li key={result['1. symbol']} onClick={() => onSelectSymbol(result['1. symbol'])}>
    //         {result['1. symbol']} - {result['2. name']}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div class="flex items-center justify-center">
      <div class="w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <div class="bg-blue-900 p-6">
          <h1 class="text-2xl font-bold text-white text-center">
            Stock Search
          </h1>
        </div>
        <div class="p-6">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for a stock symbol..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500 focus:border-transparent transition-all"
          />
        </div>
        <ul class="max-h-64 overflow-y-auto">
          {results.map((result) => (
            <li
              key={result["1. symbol"]}
              onClick={() => onSelectSymbol(result["1. symbol"])}
              class="px-6 py-4 hover:bg-green-50 cursor-pointer transition-colors duration-200"
            >
              <span class="font-semibold text-green-700">
                {result["1. symbol"]}
              </span>
              <span class="text-gray-600"> - {result["2. name"]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
