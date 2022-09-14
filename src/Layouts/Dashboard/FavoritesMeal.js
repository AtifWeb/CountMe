import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import Table from "react-bootstrap/Table";
import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";
import DeleteIcon from "@material-ui/icons/Delete";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import countMe from "../../api/countMe";
import { toast } from "react-toastify";
import { DeleteMealFav } from "../../store/actions";
class FavoritesMeal extends React.Component {
  createColorArray = () => {
    if (this.props.colorsArray.length === 0) {
      for (var i = 0; i < 30; i++) {
        let x = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        this.props.generateColors(x);
      }
    }
  };
  state = {
    sidebarMBL: false,
    FavArr: [],
  };

  GetFavMeals = () => {
    countMe
      .get("/api/Favorites/GetAllFavoriteMeals")
      .then((response) => {
        this.setState({
          FavArr: response.data,
        });
        console.log("workng");
      })
      .catch((error) => {
        console.log("Not Working Inner");
        const errorMessage = error.response
          ? error.response.data.error
          : error.message;

        toast.error(errorMessage);
      });
  };

  componentDidMount() {
    this.GetFavMeals();
  }

  render() {
    return (
      <div className="dashbaord">
        <div className="header_wrapper_mbl">
          <MenuIcon
            onClick={(e) =>
              this.setState({
                sidebarMBL: !this.state.sidebarMBL,
              })
            }
          />
        </div>
        <Sidebar header_active={6} active={this.state.sidebarMBL} />
        <div className="dashboard_body dashboard_body_add">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salt</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbohydrate</th>
                <th>Sugar</th>
                <th>Fat</th>
                <th>Saturated Fat</th>
                <th>Fibre</th>
                <th>Weight</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.FavArr.forEach((EachMeal) => (
                <tr>
                  <td>
                    <div>{EachMeal?.id}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.name}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.calories}</div>
                  </td>

                  <td>
                    <div>{EachMeal?.protein}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.carbohydrate}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.sugar}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.fat}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.saturatedFat}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.fibre}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.salt}</div>
                  </td>
                  <td>
                    <div>{EachMeal?.weight}</div>
                  </td>
                  <td>
                    <IconButton>
                      <AddAlarmIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon
                        className="Del"
                        onClick={(e) => {
                          DeleteMealFav(EachMeal.id);
                        }}
                      />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //getAllProducts: () => dispatch(getAllProducts()),
    // getAllMeals: () => dispatch(getAllMeals())
  };
};

export default connect(mapDispatchToProps)(FavoritesMeal);
