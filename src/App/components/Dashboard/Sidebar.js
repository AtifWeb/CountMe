import React from "react";
import "chartjs-plugin-labels";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import PersonIcon from "@material-ui/icons/Person";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

import HomeIcon from "@material-ui/icons/Home";
class Sidebar extends React.Component {
  render() {
    return (
      <div className={`SidebarDashboard ${this.props.active && "active"}`}>
        <h1>
          Count <span>Me</span>
        </h1>

        <nav>
          <li>
            <Link
              to="/Home"
              className={this.props.header_active === 0 && "active"}
            >
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AddMeal"
              className={this.props.header_active === 1 && "active"}
            >
              <AddIcon />
              Add Meal
            </Link>
          </li>
          <li>
            <Link
              to="/AddProduct"
              className={this.props.header_active === 2 && "active"}
            >
              <AddShoppingCartIcon />
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/Calendar"
              className={this.props.header_active === 3 && "active"}
            >
              <AddAlarmIcon />
              Add to calendar
            </Link>
          </li>
          <li>
            <Link
              to="/UserProfile"
              className={this.props.header_active === 4 && "active"}
            >
              <PersonIcon />
              User Profile
            </Link>
          </li>
          <li>
            <Link
              to="/FavoritesProducts"
              className={this.props.header_active === 5 && "active"}
            >
              <FavoriteIcon />
              Favorites - Products
            </Link>
          </li>
          <li>
            <Link
              to="/FavoritesMeal"
              className={this.props.header_active === 6 && "active"}
            >
              <FavoriteIcon />
              Favorites - Meal
            </Link>
          </li>
        </nav>
      </div>
    );
  }
}
export default Sidebar;
