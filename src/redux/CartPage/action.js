import axios from "axios";
import {
  cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
} from "./actionType";

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: cartDataLoading });
    await axios
      .get(`https://spotless-erin-trousers.cyclic.app/cart`)
      .then((res) => {
        dispatch({ type: cartDataSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: cartDataError });
  }
};

export const DeleteData = (id) => async (dispatch) => {
  try {
    dispatch({ type: deleteLoading });
    await axios
      .delete(
        `https://spotless-erin-trousers.cyclic.app/delete/${id}`
      )
      .then((res) => {
        dispatch({ type: deleteSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: deleteError });
  }
};