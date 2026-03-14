import { useReducer, useCallback, useMemo, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavourites, setShowFavourites] = useState(false);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleToggleFavourites = useCallback(() => {
    setShowFavourites((prev) => !prev);
  }, []);

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: id });
  }, []);

  const filteredPhotos = useMemo(() => {
    let result = photos;

    
    if (showFavourites) {
      result = result.filter((photo) => state.favourites.includes(photo.id));
    }

    
    if (searchQuery) {
      result = result.filter((photo) =>
        photo.author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return result;
  }, [photos, searchQuery, showFavourites, state.favourites]);

  if (loading) return <Spinner />;

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg font-medium">
          ⚠️ {error}. Please try again later.
        </p>
      </div>
    );

  return (
    <div>
      <SearchBar
        value={searchQuery}
        onChange={handleSearchChange}
        showFavourites={showFavourites}
        onToggleFavourites={handleToggleFavourites}
        favouriteCount={state.favourites.length}
      />

      
      {filteredPhotos.length === 0 && showFavourites && !searchQuery && (
        <p className="text-center text-gray-400 mt-16 text-lg">
          You haven't favourited any photos yet. Click ❤️ on a photo!
        </p>
      )}

      {filteredPhotos.length === 0 && searchQuery && (
        <p className="text-center text-gray-400 mt-16 text-lg">
          No photos found for "{searchQuery}"
        </p>
      )}

      {filteredPhotos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourited={state.favourites.includes(photo.id)}
              onToggle={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
