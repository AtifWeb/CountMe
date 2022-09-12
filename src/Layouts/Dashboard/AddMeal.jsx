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
import AddFormMeal from "../../App/components/Dashboard/AddFormMeal";
import MenuIcon from "@material-ui/icons/Menu";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import {
  addMeal,
  deleteMeal,
  addMealFav,
  updateMeals,
} from "../../store/actions";
import countMe from "../../api/countMe";
import { toast } from "react-toastify";
import CalenderAddMeal from "../../App/components/Dashboard/CalenderAddMeal";
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
    popup_active_update: false,
    sidebarMBL: false,
    popup_active_calender: true,
    MealArray: [],
  };

  getAllMeals = () => {
    countMe
      .get("/api/Meal/GetAll")
      .then((response) => {
        this.setState({
          MealArray: response.data,
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
    this.getAllMeals();
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
          <AddFormMeal
            AddMeal={addMeal}
            ClosePopForm={(e) =>
              this.setState({
                popup_active: false,
              })
            }
          />
        )}

        {this.state.popup_active_calender && (
          <CalenderAddMeal
            ClosePopForm={(e) =>
              this.setState({
                popup_active_calender: false,
              })
            }
          />
        )}

        {this.state.popup_active_update && (
          <AddFormMeal
            AddMeal={updateMeals}
            ClosePopForm={(e) =>
              this.setState({
                popup_active_update: false,
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
                    <IconButton
                      onClick={(e) => {
                        window.sessionStorage.setItem("meal_id", EachMeal.id);
                        this.setState({
                          popup_active_calender: true,
                        });
                      }}
                    >
                      <AddAlarmIcon />
                    </IconButton>

                    <IconButton
                      onClick={(e) => {
                        this.setState({
                          popup_active_update: true,
                        });
                      }}
                    >
                      <CreateIcon className="Edit" />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        deleteMeal(EachMeal.id);
                      }}
                    >
                      <DeleteIcon className="Del" />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        addMealFav({
                          id: EachMeal.id,
                        });
                      }}
                    >
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
  return {};
};

export default connect(mapDispatchToProps)(AddMeal);
