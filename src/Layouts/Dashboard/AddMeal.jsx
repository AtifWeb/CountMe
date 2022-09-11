import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import Table from "react-bootstrap/Table";
import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";
import Button from "react-bootstrap/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import AddForm from "../../App/components/Dashboard/AddForm";
import MenuIcon from "@material-ui/icons/Menu";
import { BASEURL } from "../../api/countMe";
import axios from "axios";

class AddMeal extends React.Component {
  createColorArray = () => {
    if (this.props.colorsArray.length === 0) {
      for (var i = 0; i < 30; i++) {
        let x = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        this.props.generateColors(x);
      }
    }
  };
  state = {
    popup_active: false,
    sidebarMBL: false,
    MealArray: [],
  };

  GetAllMeals = (e) => {
    axios
      .get(`${BASEURL}/api/Meal/GetAll`)
      .then((response) => {
        this.setState({
          MealArray: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.GetAllMeals();
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
        {this.state.popup_active && (
          <AddForm
            ClosePopForm={(e) =>
              this.setState({
                popup_active: false,
              })
            }
          />
        )}

        <Sidebar header_active={1} active={this.state.sidebarMBL} />
        <div className="dashboard_body dashboard_body_add">
          <div className="button_wrapper">
            <Button
              variant="primary"
              onClick={(e) => {
                this.setState({
                  popup_active: true,
                });
              }}
            >
              Add new Meal
            </Button>
          </div>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbohydrate</th>
                <th>Sugar</th>
                <th>Fat</th>
                <th>Saturated Fat</th>
                <th>Fibre</th>
                <th>Salt</th>
                <th>Weight</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.MealArray.forEach((EachMeal) => (
                <tr>
                  <td>
                    <div>{EachMeal.id}</div>
                  </td>
                  <td>
                    <div>{EachMeal.name}</div>
                  </td>
                  <td>
                    <div>{EachMeal.calories}</div>
                  </td>

                  <td>
                    <div>{EachMeal.protein}</div>
                  </td>
                  <td>
                    <div>{EachMeal.carbohydrate}</div>
                  </td>
                  <td>
                    <div>{EachMeal.sugar}</div>
                  </td>
                  <td>
                    <div>{EachMeal.fat}</div>
                  </td>
                  <td>
                    <div>{EachMeal.saturatedFat}</div>
                  </td>
                  <td>
                    <div>{EachMeal.fibre}</div>
                  </td>
                  <td>
                    <div>{EachMeal.salt}</div>
                  </td>
                  <td>
                    <div>{EachMeal.weight}</div>
                  </td>
                  <td>
                    <IconButton>
                      <CreateIcon className="Edit" />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon className="Del" />
                    </IconButton>
                    <IconButton>
                      <FavoriteIcon className="Fav" />
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
    // getAllMeals: () => dispatch(getAllMeals()),
  };
};

export default connect(mapDispatchToProps)(AddMeal);
