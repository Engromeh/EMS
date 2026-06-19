import  { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

 

    
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSuggestions([]);
    }
  };

  const handleClick = (title) => {
    setSearchTerm(title);
    navigate(`/search?q=${encodeURIComponent(title)}`);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="group flex h-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg"
      >
        <div className="flex items-center pl-4 text-gray-400">
          <FaSearch size={16} />
        </div>

        <input
          type="text"
          placeholder="Search ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-full flex-1 bg-transparent px-3 text-sm outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 px-6 text-sm font-medium text-white transition hover:bg-blue-700"
        >
       <FaSearch size={16} />
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-[55px] z-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
          <div className="border-b bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Suggestions
          </div>

          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.title)}
              className="flex cursor-pointer items-center gap-4 px-4 py-3 transition hover:bg-gray-50"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-14 w-14 rounded-xl border object-cover"
              />

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="mt-1 truncate text-xs text-gray-500">
                  {item.description}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-600">
                    ${item.price}
                  </span>

                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
                    {item.stock} in stock
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t bg-gray-50 px-4 py-3 text-center text-xs text-gray-500">
            Press Enter to view all results
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;