import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [category, setCategory] = useState('Nannies / recurring babysitters');
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('10 miles');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDistanceChange = (e) => setDistance(e.target.value);

  const handleSearch = () => {
    // Implement search functionality here
    console.log({ category, location, distance });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-white/15 w-full mx-auto shadow-lg mb-4 rounded-lg">
      {/* Category Selector */}
      <select
        value={category}
        onChange={handleCategoryChange}
        className="text-teal-700 bg-white border border-teal-200 rounded-lg px-4 py-2 outline-none w-full md:w-auto"
      >
        <option value="Nannies / recurring babysitters">Nannies / recurring babysitters</option>
        <option value="Tutors / teachers">Tutors / teachers</option>
        <option value="Pet sitters / dog walkers">Pet sitters / dog walkers</option>
        <option value="Senior care">Senior care</option>
      </select>

      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter ZIP code"
        value={location}
        onChange={handleLocationChange}
        className="flex-grow text-teal-700 bg-white border-t border-b border-teal-200 px-4 py-2 outline-none w-full md:w-auto"
      />

      {/* Distance Selector */}
      <select
        value={distance}
        onChange={handleDistanceChange}
        className="text-teal-700 bg-white border border-teal-200 px-4 py-2 outline-none w-full md:w-auto"
      >
        <option value="5 miles">within 5 miles</option>
        <option value="10 miles">within 10 miles</option>
        <option value="20 miles">within 20 miles</option>
        <option value="50 miles">within 50 miles</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-teal-600 text-white rounded-full px-4 py-2 hover:bg-teal-700 focus:outline-none w-full md:w-auto"
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;