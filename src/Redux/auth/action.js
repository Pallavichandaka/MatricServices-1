import axios from "axios";
import * as types from "./actionTypes";

// const api = `http://localhost:2345/api/admin/users`;
const api = `matricservices-2-production-e360.up.railway.app/api/admin/users`;

//get admin details
export const getAdminDetails = () => (dispatch) => {
    dispatch({ type: types.GET_LOGIN_REQUEST });
  
    return axios
      .get(api)
      .then((res) => {
        return dispatch({
          type: types.GET_LOGIN_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: types.GET_LOGIN_FAILURE,
          payload: err.message,
        });
      });
  };

  //post admin details

  export const postAdminDetails= (payload) => (dispatch) => {
    dispatch({ type: types.POST_LOGIN_REQUEST });
  
    return axios
      .post(api + "/login", payload)
      .then((res) => {
        return dispatch({
          type: types.POST_LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: types.POST_LOGIN_FAILURE,
          payload: err.message,
        });
      });
  };
