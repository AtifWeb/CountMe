import React from "react";

const Login = React.lazy(() => import("./Layouts/Authentication/Login/Login"));

const Register = React.lazy(() =>
  import("./Layouts/Authentication/Register/Register")
);

const Home = React.lazy(() => import("./Layouts/Dashboard/Home"));
const UserProfile = React.lazy(() => import("./Layouts/Dashboard/UserProfile"));
const AddMeal = React.lazy(() => import("./Layouts/Dashboard/AddMeal"));
const AddProduct = React.lazy(() => import("./Layouts/Dashboard/AddProduct"));
const FavoritesProducts = React.lazy(() =>
  import("./Layouts/Dashboard/FavoritesProducts")
);
const Calendar = React.lazy(() => import("./Layouts/Dashboard/Calendar"));
const FavoritesMeal = React.lazy(() =>
  import("./Layouts/Dashboard/FavoritesMeal")
);

const route = [
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/Home", exact: true, name: "Home", component: Home },
  { path: "/AddMeal", exact: true, name: "AddMeal", component: AddMeal },
  {
    path: "/FavoritesProducts",
    exact: true,
    name: "FavoritesProducts",
    component: FavoritesProducts,
  },
  {
    path: "/FavoritesMeal",
    exact: true,
    name: "FavoritesMeal",
    component: FavoritesMeal,
  },

  { path: "/Calendar", exact: true, name: "Calendar", component: Calendar },
  {
    path: "/AddProduct",
    exact: true,
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/UserProfile",
    exact: true,
    name: "UserProfile",
    component: UserProfile,
  },
];

export default route;
