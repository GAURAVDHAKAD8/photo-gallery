function SearchBar({
  value,
  onChange,
  showFavourites,
  onToggleFavourites,
  favouriteCount,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
      <input
        type="text"
        placeholder="Search by author..."
        value={value}
        onChange={onChange}
        className="w-full max-w-md px-4 py-2 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-500 text-gray-700"
      />
      <button
        onClick={onToggleFavourites}
        className={`flex items-center gap-2 px-4 py-2  cursor-pointer rounded-xl font-medium transition-all duration-200 border-2 ${
          showFavourites
            ? "bg-pink-500 text-white border-pink-500 hover:bg-pink-600"
            : "bg-white text-pink-500 border-pink-300 hover:border-pink-500"
        }`}
      >
        {showFavourites ? "📷 All Photos" : `❤️ Favourites (${favouriteCount})`}
      </button>
    </div>
  );
}

export default SearchBar;
