import api from "../../utils/api";
import { ActionTypes } from "../actionTypes";

export const getGenres = () => (dispatch) => {
  dispatch({
    type: ActionTypes.GENRES_LOADING,
  });
  const params = { language: "tr" };

  api
    .get("/genre/movie/list", { params })
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRES_SUCCESS,
        payload: res.data.genres,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
