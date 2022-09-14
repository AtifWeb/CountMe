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
    weight: 0,
    calories: 0,
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    sugar: 0,
    saturatedFat: 0,
    fibre: 0,
    salt: 0,
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
            <Form.Label>Enter Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Weight"
              onChange={(e) => {
                this.setState({
                  weight: e.target.value,
                });
              }}
              value={this.state.weight}
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Saturated Fat</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Saturated Fat"
              onChange={(e) => {
                this.setState({
                  saturatedFat: e.target.value,
                });
              }}
              value={this.state.saturatedFat}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sugar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Sugar"
              onChange={(e) => {
                this.setState({
                  sugar: e.target.value,
                });
              }}
              value={this.state.sugar}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fibre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Fibre"
              onChange={(e) => {
                this.setState({
                  fibre: e.target.value,
                });
              }}
              value={this.state.fibre}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Salt</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Salt"
              onChange={(e) => {
                this.setState({
                  salt: e.target.value,
                });
              }}
              value={this.state.salt}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              this.props.AddMeal({
                name: this.state.name,
                calories: Number(this.state.calories),
                protein: Number(this.state.protein),
                carbohydrate: Number(this.state.carbohydrate),
                sugar: Number(this.state.sugar),
                fat: Number(this.state.fat),
                saturatedFat: Number(this.state.saturatedFat),
                fibre: Number(this.state.fibre),
                salt: Number(this.state.salt),
                weight: Number(this.state.weight),
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
