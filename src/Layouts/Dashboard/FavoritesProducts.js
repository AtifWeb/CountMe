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
import { DeleteProductFav } from "../../store/actions";
import countMe from "../../api/countMe";
import { toast } from "react-toastify";
class FavoritesProducts extends React.Component {
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

  GetFavProduct = () => {
    countMe
      .get("/api/Favorites/GetAllFavoriteProducts")
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
    this.GetFavProduct();
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
        <Sidebar header_active={5} active={this.state.sidebarMBL} />
        <div className="dashboard_body dashboard_body_add">
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
              {this.state.FavArr.forEach((EachProduct) => (
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
                      <AddAlarmIcon />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        DeleteProductFav(EachProduct.id);
                      }}
                    >
                      <DeleteIcon className="Del" />
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

export default connect(mapDispatchToProps)(FavoritesProducts);
