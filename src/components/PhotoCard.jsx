function PhotoCard({ photo, isFavourited, onToggle }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm font-medium text-gray-700 truncate">
          {photo.author}
        </p>
        <button
          onClick={() => onToggle(photo.id)}
          className="text-2xl transition-transform duration-200 hover:scale-125 focus:outline-none"
          aria-label="Toggle favourite"
        >
          {isFavourited ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
