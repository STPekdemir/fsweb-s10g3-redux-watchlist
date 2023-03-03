import { movies } from "./../movies";
import { FAV_EKLE, FAV_CIKAR } from "../actions/actions";
const intialState = { movies: movies, favMovies: [] };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FAV_EKLE:
      if (state.favMovies.includes(state.movies[action.payload])) {
        return { ...state };
      } else {
        return {
          ...state,
          favMovies: [...state.favMovies, state.movies[action.payload]],
        };
      }

    case FAV_CIKAR:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default reducer;
