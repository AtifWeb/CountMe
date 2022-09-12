import countMe from "../../api/countMe";
import { authHeader } from "../../api/headerHelper";

import { toast } from "react-toastify";

export const getAllMeals = () => {
  countMe
    .post("/api/Meal/GetAll", { headers: authHeader() })
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

export const addMeal = (formValues) => {
  countMe
    .post("/api/Product/Create", { ...formValues }, { headers: authHeader() })
    .then((response) => {
      console.log(" Working");

      toast.success("Successfully added new product");
    })
    .catch((error) => {
      console.log("Not Working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const addMealFav = (formValues) => {
  countMe
    .post(
      "/api/Favorites/AddMealToFavorites",
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

export const DeleteMealFav = (id) => {
  countMe
    .delete(`/api/Favorites/DeleteMealFromFavorites/${id}`, {
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

export const deleteMeal = (productId) => {
  countMe
    .delete(`/api/Meal/Delete/${productId}`, {
      headers: authHeader(),
    })
    .then(() => {
      console.log("working");

      toast.warn("Meal deleted");
    })
    .catch((error) => {
      console.log("not working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const updateMeals = (formValues, productId) => {
  countMe
    .put(
      `/api/Meal/Update/${productId}`,
      { ...formValues },
      { headers: authHeader() }
    )
    .then((response) => {
      console.log(response);
      toast.success("Successfully updated product");
    })
    .catch((error) => {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};

export const MealsCalender = (formValues) => {
  countMe
    .post(
      "/api/MealDay/AddMealToCalender",
      { ...formValues },
      { headers: authHeader() }
    )
    .then((response) => {
      console.log("Working");

      toast.success("Successfully added to calender");
    })
    .catch((error) => {
      console.log("Not Working");
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;

      toast.error(errorMessage);
    });
};
