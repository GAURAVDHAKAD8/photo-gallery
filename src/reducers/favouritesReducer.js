const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const alreadyFavourited = state.favourites.includes(action.payload);
      const updated = alreadyFavourited
        ? state.favourites.filter((id) => id !== action.payload)
        : [...state.favourites, action.payload];

      localStorage.setItem("favourites", JSON.stringify(updated));
      return { ...state, favourites: updated };
    }
    default:
      return state;
  }
}

export { initialState, favouritesReducer };
