import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import Table from "react-bootstrap/Table";
import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";
import Button from "react-bootstrap/Button";
import { IconButton } from "@material-ui/core";
import AddForm from "../../App/components/Dashboard/AddForm";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarAddProduct from "../../App/components/Dashboard/CalendarAddProduct";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  addProduct,
  deleteProduct,
  addProductFav,
  updateProduct,
} from "../../store/actions";
import countMe from "../../api/countMe";
import { toast } from "react-toastify";
class AddProduct extends React.Component {
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
    ProductArray: [],
    popup_active_calendar: false,
  };

  getAllProducts = () => {
    countMe
      .get("/api/Product/GetAll")
      .then((response) => {
        this.setState({
          ProductArray: response.data,
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
    this.getAllProducts();
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
        {this.state.popup_active_calendar && (
          <CalendarAddProduct
            ClosePopForm={(e) =>
              this.setState({
                popup_active_calendar: false,
              })
            }
          />
        )}

        {this.state.popup_active && (
          <AddForm
            AddProductComp={addProduct}
            ClosePopForm={(e) =>
              this.setState({
                popup_active: false,
              })
            }
          />
        )}
        {this.state.popup_active_update && (
          <AddForm
            AddProductComp={updateProduct}
            ClosePopForm={(e) =>
              this.setState({
                popup_active_update: false,
              })
            }
          />
        )}
        <Sidebar header_active={2} active={this.state.sidebarMBL} />
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
              Add new Product
            </Button>
          </div>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbohydrate</th>
                <th>Sugar</th>
                <th>Fat</th>
                <th>Saturated Fat</th>
                <th>Fibre</th>
                <th>Salt</th>
                <th>Serving</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ProductArray.forEach((EachProduct) => (
                <tr>
                  <td>
                    <div>{EachProduct.id}</div>
                  </td>
                  <td>
                    <div>{EachProduct.name}</div>
                  </td>
                  <td>
                    <div>{EachProduct.brand}</div>
                  </td>
                  <td>
                    <div>{EachProduct.calories}</div>
                  </td>
                  <td>
                    <div>{EachProduct.protein}</div>
                  </td>
                  <td>
                    <div>{EachProduct.carbohydrate}</div>
                  </td>
                  <td>
                    <div>{EachProduct.sugar}</div>
                  </td>
                  <td>
                    <div>{EachProduct.fat}</div>
                  </td>
                  <td>
                    <div>{EachProduct.saturatedFat}</div>
                  </td>
                  <td>
                    <div>{EachProduct.fibre}</div>
                  </td>
                  <td>
                    <div>{EachProduct.salt}</div>
                  </td>
                  <td>
                    <div>{EachProduct.isServing}</div>
                  </td>
                  <td>
                    <IconButton
                      onClick={(e) => {
                        window.sessionStorage.setItem(
                          "product_id",
                          EachProduct.id
                        );
                        this.setState({
                          popup_active_calendar: true,
                        });
                      }}
                    >
                      <AddAlarmIcon />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        deleteProduct(EachProduct.id);
                      }}
                    >
                      <DeleteIcon className="Del" />
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
                        addProductFav({
                          id: EachProduct.id,
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

export default connect(null, mapDispatchToProps)(AddProduct);
