import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() =>
  import("./Layouts/Dashboard/Default")
);

const Settings = React.lazy(() => import("./Layouts/Settings/Settings"));

const Products = React.lazy(() =>
  import("./Layouts/Products/Products")
);

const routes = [
  { path: "/", exact: true, name: "Default", component: DashboardDefault },
  {
    path: "/settings",
    exact: true,
    name: "Settings",
    component: Settings
  },
  {
    path: "/products",
    exact: true,
    name: "Products",
    component: Products
  },
];

export default routes;
