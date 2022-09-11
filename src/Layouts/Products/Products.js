import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import ProductList from "../../App/components/Products/ProductsList";
import AddNewProductForm from "../../App/components/Products/AddProductForm";
import * as actionTypes from "../../store/actions/types";
import {
  getAllProducts,
  deleteProduct,
  addProduct,
  getUserProfile,
} from "../../store/actions";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Bar, Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productFromDate: new Date(Date.now() - 864e5 * 60),
      productToDate: new Date(),
      selectedChart: "bar",
      seletedType: 1,
    };
  }

  onSubmit = (formValues) => {
    this.props.addProduct(formValues);
    this.props.exitModal();
  };

  componentDidMount() {
    this.props.getUserProfile();
    this.props.getAllProducts();
    this.createColorArray();
  }

  createColorArray = () => {
    if (this.props.colorsArray.length === 0) {
      for (var i = 0; i < 30; i++) {
        let x = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        this.props.generateColors(x);
      }
    }
  };
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card style={{ padding: "10px" }}>
              <Card.Header>
                <span className="h3">Products</span>
                <span className="float-right">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      this.props.getAllProducts();
                    }}
                  >
                    All products
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({
                        selectedChart: "doughnat",
                        selectedType: 0,
                      });
                      this.setState({
                        doughnutData: this.doughnutStateSetup(
                          this.props.products.filter((t) => t.type === 0)
                        ),
                      });
                      this.props.filterProducts(0);
                    }}
                    variant="outline-primary"
                    active={
                      this.state.selectedChart === "doughnat" &&
                      this.state.selectedType === 0
                    }
                  >
                    Income
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({
                        selectedChart: "doughnat",
                        selectedType: 1,
                      });

                      this.setState({
                        doughnutData: this.doughnutStateSetup(
                          this.props.products.filter((t) => t.type === 1)
                        ),
                      });
                      this.props.filterProducts(1);
                    }}
                    variant="outline-primary"
                    active={
                      this.state.selectedChart === "doughnat" &&
                      this.state.selectedType === 1
                    }
                  >
                    Expenses
                  </Button>
                </span>
              </Card.Header>
              <Card.Body className="pt-1 mt-1">
                <Row className="border-bottom ">
                  <Col></Col>
                </Row>
                <Row className="border-bottom" style={{ marginTop: "10px" }}>
                  <Col>
                    {this.state.selectedChart === "bar" ? (
                      <Bar
                        data={this.barStateSetup(this.props.products)}
                        height={60}
                        options={{
                          plugins: {
                            labels: {
                              render: "value",
                              fontColor: (data) => {
                                return data.dataset.label === "Income"
                                  ? "black"
                                  : "white";
                              },
                            },
                          },
                          scales: {
                            xAxes: [{ stacked: true }],
                            yAxes: [{ stacked: true }],
                          },
                        }}
                      />
                    ) : (
                      <Doughnut
                        data={this.doughnutStateSetup(this.props.products)}
                        height={60}
                        options={{
                          plugins: {
                            labels: {
                              render: "percentage",
                              fontColor: (data) => {
                                var rgb = this.hexToRgb(
                                  data.dataset.backgroundColor[data.index]
                                );
                                var threshold = 140;
                                var luminance = rgb
                                  ? 0.299 * rgb.r +
                                    0.587 * rgb.g +
                                    0.114 * rgb.b
                                  : { r: 0, g: 0, b: 0 };
                                return luminance > threshold
                                  ? "black"
                                  : "white";
                              },
                            },
                          },
                        }}
                      />
                    )}
                  </Col>
                </Row>
                <Col>
                  <Button
                    onClick={() => this.props.showModal("newProduct")}
                    className="float-right mb-2"
                    variant="primary"
                  >
                    Add new product
                  </Button>
                  <AddNewProductForm
                    onSubmit={this.onSubmit}
                    modalState={this.props.modalState}
                    showModal={this.props.showModal}
                    exitModal={this.props.exitModal}
                  />
                  <ProductList />
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products.allProducts),
    modalState: state.navigation.showModal,
    colorsArray: state.navigation.colorsArray,
    productType: state.products.selectedType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: (dateFrom, dateTo) =>
      dispatch(getAllProducts(dateFrom, dateTo)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    showModal: (modalName) =>
      dispatch({ type: actionTypes.SHOW_MODAL, payload: modalName }),
    exitModal: () => dispatch({ type: actionTypes.EXIT_MODAL }),
    addProduct: (formValues) => dispatch(addProduct(formValues)),
    getUserProfile: () => dispatch(getUserProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
