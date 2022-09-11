import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import Table from "react-bootstrap/Table";
import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";
import Button from "react-bootstrap/Button";

import { IconButton } from "@material-ui/core";
import AddForm from "../../App/components/Dashboard/AddForm";
import CheckIcon from "@material-ui/icons/Check";
import MenuIcon from "@material-ui/icons/Menu";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import { BASEURL } from "../../api/countMe";
import axios from "axios";
import { getAllProducts, addProduct, deleteProduct } from "../../store/actions";
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
    sidebarMBL: false,
    ProductArray: [],
  };

  // GetAllProducts = (e) => {
  //   axios
  //     .get(`${BASEURL}/api/Meal/GetAll`)
  //     .then((response) => {
  //       this.setState({
  //         ProductArray: response,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  componentDidMount() {
    if (this.props.getProducts() != undefined) {
      this.setState({
        ProductArray: this.props.getProducts(),
      });
    }
    console.log(this.props.getProducts());
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
            AddProductRedux={this.props.addProduct}
            ClosePopForm={(e) =>
              this.setState({
                popup_active: false,
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
                    <IconButton>
                      <CheckIcon className="Edit" />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        this.props.removeProduct(EachProduct.id);
                      }}
                    >
                      <AddAlarmIcon className="Del" />
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
    getProducts: () => dispatch(getAllProducts()),
    addProduct: () => dispatch(addProduct()),
    removeProduct: () => dispatch(deleteProduct()),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
