import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
class AddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "",
    brand: "",
    calories: 0,
    protein: 0,
    carbohydrate: 0,
    fat: 0,
  };

  render() {
    return (
      <div className="CountProfile">
        <Form>
          <span
            className="close_icon"
            onClick={(e) => {
              this.props.ClosePopForm();
            }}
          >
            <CloseIcon />
          </span>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Brand"
              onChange={(e) => {
                this.setState({
                  brand: e.target.value,
                });
              }}
              value={this.state.brand}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Calories"
              onChange={(e) => {
                this.setState({
                  calories: e.target.value,
                });
              }}
              value={this.state.calories}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Carbo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Carbo"
              onChange={(e) => {
                this.setState({
                  carbohydrate: e.target.value,
                });
              }}
              value={this.state.carbohydrate}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Protien</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Protien"
              onChange={(e) => {
                this.setState({
                  protein: e.target.value,
                });
              }}
              value={this.state.protein}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fat</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Fat"
              onChange={(e) => {
                this.setState({
                  fat: e.target.value,
                });
              }}
              value={this.state.fat}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              this.props.AddProductRedux({
                name: this.state.name,
                brand: this.state.brand,
                calories: Number(this.state.calories),
                protein: Number(this.state.protein),
                carbohydrate: Number(this.state.carbohydrate),
                sugar: 0,
                fat: Number(this.state.fat),
                saturatedFat: 0,
                fibre: 0,
                salt: 0,
                isServing: true,
              });
            }}
          >
            ADD
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddForm;
