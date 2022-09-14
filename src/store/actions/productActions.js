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

export const getAllProducts = () => {
  countMe
    .post("/api/Product/GetAll", { headers: authHeader() })
    .then((response) => {
      console.log("workkng");
    })
    .catch((error) => {
      console.log("Not Working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const addProduct = (formValues) => {
  countMe
    .post("/api/Product/Create", { ...formValues }, { headers: authHeader() })
    .then((response) => {
      console.log(" Working");

      toast.success("Successfully added new product");
    })
    .catch((error) => {
      console.log("Not Working product add");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const ProductCalendar = (formValues) => {
  countMe
    .post(
      "/api/ProductDay/AddProductToCalender",
      { ...formValues },
      { headers: authHeader() }
    )
    .then((response) => {
      console.log("Working");

      toast.success("Successfully added to calender");
    })
    .catch((error) => {
      console.log("Not Working Product Calender");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const addProductFav = (formValues) => {
  countMe
    .post(
      "/api/Favorites/AddProductToFavorites",
      { ...formValues },
      { headers: authHeader() }
    )
    .then((response) => {
      console.log("Working fav");
      toast.success("Successfully added to Favorites");
    })
    .catch((error) => {
      console.log("Not Working fav");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const DeleteProductFav = (id) => {
  countMe
    .delete(`/api/Favorites/DeleteProductFromFavorites/${id}`, {
      headers: authHeader(),
    })
    .then((response) => {
      console.log("Working fav Delete");
      toast.success("Successfully Deleted");
    })
    .catch((error) => {
      console.log("Not Working fav Delete");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const deleteProduct = (productId) => {
  countMe
    .delete(`/api/Product/Delete/${productId}`, {
      headers: authHeader(),
    })
    .then(() => {
      console.log("working");

      toast.warn("Product deleted");
    })
    .catch((error) => {
      console.log("not working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const updateProduct = (formValues, productId) => {
  countMe
    .put(
      `/api/Product/Update/${productId}`,
      { ...formValues },
      { headers: authHeader() }
    )
    .then((response) => {
      console.log(response);
      toast.success("Successfully updated product");
    })
    .catch((error) => {
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};
