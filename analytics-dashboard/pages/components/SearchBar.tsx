import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center mb-8 flex flex-row gap-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-64 rounded-l"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-900 text-white p-2 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}