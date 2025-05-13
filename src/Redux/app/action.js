import axios from "axios";
import * as types from "./actionTypes";

const api = `http://matricservices-2-production-2fed.up.railway.app/api`;

// const api = `http://localhost:2345/api`;

// PostGetInTouchInfo
export const postGetInTouchInfo = (payload) => (dispatch) => {
  dispatch({ type: types.POST_GET_IN_TOUCH_REQUEST });

  return axios
    .post(api + "/getInTouch/addEvent", payload)
    .then((res) => {
      return dispatch({
        type: types.POST_GET_IN_TOUCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_GET_IN_TOUCH_FAILURE,
        payload: err.message,
      });
    });
};

// Get GetInTouchInfo
export const getGetInTouchInfo = () => (dispatch) => {
  dispatch({ type: types.GET_GET_IN_TOUCH_REQUEST });

  return axios
    .get(api + "/getInTouch")
    .then((res) => {
      return dispatch({
        type: types.GET_GET_IN_TOUCH_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_GET_IN_TOUCH_FAILURE,
        payload: err.message,
      });
    });
};

// Post ContactInfo
export const postContactInfo = (payload) => (dispatch) => {
  dispatch({ type: types.POST_CONTACT_US_REQUEST });

  return axios
    .post(api + "/contactUs/addEvent", payload)
    .then((res) => {
      return dispatch({
        type: types.POST_CONTACT_US_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_CONTACT_US_FAILURE,
        payload: err.message,
      });
    });
};

// Get ContactInfo
export const getContactInfo = () => (dispatch) => {
  dispatch({ type: types.GET_CONTACT_US_REQUEST });

  return axios
    .get(api + "/contactUs")
    .then((res) => {
      return dispatch({
        type: types.GET_CONTACT_US_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_CONTACT_US_FAILURE,
        payload: err.message,
      });
    });
};

// Post CampusAmbReg
export const postCampusAmbReg = (payload) => (dispatch) => {
  dispatch({ type: types.POST_CAMPUS_AMB_REG_REQUEST });

  return axios
    .post(api + "/campusAmbReg/addEvent", payload)
    .then((res) => {
      return dispatch({
        type: types.POST_CAMPUS_AMB_REG_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_CAMPUS_AMB_REG_FAILURE,
        payload: err.message,
      });
    });
};

// Get CampusAmbReg
export const getCampusAmbReg = () => (dispatch) => {
  dispatch({ type: types.GET_CAMPUS_AMB_REG_REQUEST });

  return axios
    .get(api + "/campusAmbReg")
    .then((res) => {
      return dispatch({
        type: types.GET_CAMPUS_AMB_REG_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_CAMPUS_AMB_REG_FAILURE,
        payload: err.message,
      });
    });
};

//post workshop register
export const postworkshopRegister = (payload) => async (dispatch) => {
  dispatch({ type: types.POST_WORKSHOP_REG_REQUEST });

  try {
    const res = await axios.post(
      api + "/workShopRegister/addEventRegistration",
      payload
    );
    return dispatch({
      type: types.POST_WORKSHOP_REG_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: types.POST_WORKSHOP_REG_FAILURE,
      payload: err.message,
    });
  }
};

//get workshop register
export const getworkshopRegister = () => (dispatch) => {
  dispatch({ type: types.GET_WORKSHOP_REG_REQUEST });

  return axios
    .get(api + "/workShopRegister")
    .then((res) => {
      return dispatch({
        type: types.GET_WORKSHOP_REG_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_WORKSHOP_REG_FAILURE,
        payload: err.message,
      });
    });
};





//post workshop

export const postWorkshop = (payload) => (dispatch) => {
  dispatch({ type: types.POST_WORKSHOP_REQUEST });
  return axios
    .post(api + "/adminWorkShop/addWorkShop", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return dispatch({
        type: types.POST_WORKSHOP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_WORKSHOP_FAILURE,
        payload: err.message,
      });
    });
};

//get workshop
export const getWorkshop = () => (dispatch) => {
  dispatch({ type: types.GET_WORKSHOP_REQUEST });

  return axios
    .get(api + "/adminWorkShop")
    .then((res) => {
      return dispatch({
        type: types.GET_WORKSHOP_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_WORKSHOP_FAILURE,
        payload: err.message,
      });
    });
};

//get workshop by id
export const getWorkshopbyId=(id)=>(dispatch)=>{
  dispatch({type:types.GET_WORKSHOPID_REQUEST});
  return axios
  .get(api+`/adminWorkshop/${id}`)
  .then((res)=>{
    return dispatch({
      type:types.GET_WORKSHOPID_SUCCESS,
      payload:res.data.data
    });
  })
  .catch((err) => {
    return dispatch({
      type: types.GET_WORKSHOPID_FAILURE,
      payload: err.message,
    });
  });
}

//patch workshop
// export const patchWorkshop=(payload,id)=>(dispatch)=>{

//   dispatch({type:types.PATCH_WORKSHOPID_REQUEST});
//   return axios
//   .patch(api+`/adminWorkshop/${id}`,payload, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//   .then((res)=>{
//     return dispatch({
//       type: types.PATCH_WORKSHOPID_SUCCESS,
//       payload: res.data, 
//     });
//   })
//   .catch((err)=>{
//     return dispatch({
//       type:types.PATCH_WORKSHOPID_FAILURE,
//       payload:err.message
//     })
//   })
// }

// export const patchWorkshop = (formData, workshopId) => async (dispatch) => {
//   dispatch({ type: types.PATCH_WORKSHOPID_REQUEST });
//   try {
    
//      console.log(formData)
//     console.log(workshopId)

//      const response = axios.patch(`${api}/adminWorkshop/${workshopId}`,formData,{
//       headers:{
//          "Content-Type":"multipart/form-data"
//       }
//      });

//      response.then((res)=>{
//       return dispatch({type:types.PATCH_WORKSHOPID_SUCCESS,payload:res.data})
//      })

//   } catch (error) {
//    return dispatch({ type: types.PATCH_WORKSHOPID_FAILURE, payload: error.message });
//   }
// };


export const updateWorkShop = (id,formData)=>(dispatch)=>{
    console.log("editDATA:",formData)
   
     dispatch({type:types.PATCH_WORKSHOPID_REQUEST});
     return axios.patch(`${api}/adminWorkshop/${id}`, formData)
        .then((res)=>{
         console.log(res)
       })
       .catch((err)=>{
         return dispatch({
           type:types.PATCH_WORKSHOPID_FAILURE,
           payload:err.message
         })
       })
}


//delete workhopid
export const delWorkshopId=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_WORKSHOPID_REQUEST});
  return axios
  .delete(api+`/adminWorkshop/${id}`)
  .then((res)=>{
    return dispatch({
      type:types.DELETE_WORKSHOPID_SUCCESS
    });
  })
  .catch((err)=>{
    return dispatch({
      type:types.DELETE_WORKSHOPID_FAILURE,
      payload:err.message
    })
  })

}


//post products
export const postProducts = (payload) => (dispatch) => {
  dispatch({ type: types.POST_PRODUCT_REQUEST });
  return axios
    .post(api + "/adminProduct/addProduct", payload,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return dispatch({
        type: types.POST_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_PRODUCT_FAILURE,
        payload: err.message,
      });
    });
};

//get products
export const getProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .get(api + "/adminProduct")
    .then((res) => {
      return dispatch({
        type: types.GET_PRODUCT_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_PRODUCT_FAILURE,
        payload: err.message,
      });
    });
};

//get products by id
export const getProductsbyId=(id)=>(dispatch)=>{

  dispatch({type:types.GET_PRODUCTID_REQUEST});
  return axios
  .get(api+`/adminProduct/${id}`)
  .then((res)=>{
    console.log("inside action", res)
    dispatch({
      type:types.GET_PRODUCTID_SUCCESS,
      payload:res.data.data
    });
  })
  .catch((err)=>{
    dispatch({
      type:types.GET_PRODUCTID_FAILURE,
      payload:err.message
    })
  })
}
//patch product
export const updateProduct = (id,formData)=>(dispatch)=>{
  console.log("editDATA:",formData)
 
   dispatch({type:types.PATCH_WORKSHOPID_REQUEST});
      return axios
     .patch(api+`/adminProduct/${id}`,formData)
      .then((res)=>{
       console.log(res)
     })
     .catch((err)=>{
       return dispatch({
         type:types.PATCH_WORKSHOPID_FAILURE,
         payload:err.message
       })
     })
}
//delete productid
export const delProductId=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_PRODUCTID_REQUEST});
  return axios
  .delete(api+`/adminProduct/${id}`)
  .then((res)=>{
    return dispatch({
      type:types.DELETE_PRODUCTID_SUCCESS
    });
  })
  .catch((err)=>{
    return dispatch({
      type:types.DELETE_PRODUCTID_FAILURE,
      payload:err.message
    })
  })

}
