function Filter({ setFilter }) {
  return (
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="mb-6 p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 w-full sm:w-auto"
    >
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Strategy">Strategy</option>
    </select>
  );
}

export default Filter;
