// src/components/SearchFilter.jsx
export default function SearchFilter({
  onSearchChange,
  onCountryChange,
  onGenderChange,
  countries,
  genders = [], // default empty array
}) {
  return (
    <div className="flex space-x-4 mb-4 text-gray-200">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        className="border border-gray-600 rounded p-2 flex-1 
                   bg-black text-gray-200 placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Country Dropdown */}
      <select
        className="border border-gray-600 rounded p-2 
                   bg-black text-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">All Countries</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Gender Dropdown */}
      <select
        className="border border-gray-600 rounded p-2 
                   bg-black text-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
        onChange={(e) => onGenderChange(e.target.value)}
      >
        <option value="">All Genders</option>
        {genders.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}
