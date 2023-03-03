import { movies } from "./../movies";
import {
  FAV_EKLE,
  FAV_CIKAR,
  ONCEKİ,
  SONRAKİ,
  BASA_DON,
} from "../actions/actions";
const intialState = { movies: movies, favMovies: [], sira: 0 };
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
    case BASA_DON:
      return { ...state, sira: 0 };
    case ONCEKİ:
      return { ...state, sira: state.sira - 1 };
    case SONRAKİ:
      return { ...state, sira: state.sira + 1 };
    default:
      return state;
  }
};
export default reducer;
