import countMe from "../../api/countMe";
import { authHeader } from "../../api/headerHelper";

import {
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
} from "./types";
import { toast } from "react-toastify";
import { reset } from "redux-form";

export const getAllProducts = () => (dispatch) => {
  countMe
    .post("/api/Product/GetAll", { headers: authHeader() })
    .then((response) => {
      console.log("workkng");
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      console.log("Not Working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      dispatch({
        type: GET_ALL_PRODUCTS_ERROR,
        payload: errorMessage,
      });
      toast.error(errorMessage);
    });
};

export const addProduct = (formValues) => (dispatch) => {
  countMe
    .post("/api/Product/Create", { ...formValues }, { headers: authHeader() })
    .then((response) => {
      console.log(" Working");
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
      dispatch(reset("addProductForm"));
      toast.success("Successfully added new product");
    })
    .catch((error) => {
      console.log("Not Working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      dispatch({
        type: ADD_PRODUCT_ERROR,
        payload: errorMessage,
      });
      toast.error(errorMessage);
    });
};

export const deleteProduct = (productId) => (dispatch) => {
  countMe
    .delete(`/api/Product/Delete/${productId}`, {
      headers: authHeader(),
    })
    .then(() => {
      console.log("working");
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: productId,
      });
      toast.warn("Product deleted");
    })
    .catch((error) => {
      console.log("not working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      dispatch({
        type: DELETE_PRODUCT_ERROR,
        payload: errorMessage,
      });
      toast.error(errorMessage);
    });
};

export const updateProduct = (productId) => (dispatch) => {
  countMe
    .put(`/api/Product/Update/${productId}`, { headers: authHeader() })
    .then((response) => {
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: response.data,
      });
      dispatch(reset("editProductForm"));
      toast.success("Successfully updated product");
    })
    .catch((error) => {
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      dispatch({
        type: UPDATE_PRODUCT_ERROR,
        payload: errorMessage,
      });
      toast.error(errorMessage);
    });
};
