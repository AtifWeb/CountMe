import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
import { MealsCalendar, ProductCalendar } from "../../../store/actions";
class CalendarAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    date: new Date(),
    product_id: "",
    meal_id: "",
    meal_type: "",
  };
  render() {
    return (
      <div className="CountProfile CalendarAdd">
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
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="24.08.2022"
              value={this.state.date}
              onChange={(e) => {
                this.setState({
                  date: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Id"
              value={this.state.product_id}
              onChange={(e) => {
                this.setState({
                  product_id: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Meal Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Meal Id"
              value={this.state.meal_id}
              onChange={(e) => {
                this.setState({
                  meal_id: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Meal type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  meal_type: e.target.value,
                });
              }}
            >
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Dinner</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            onClick={(e) => {
              e.preventDefault();
              console.log(this.state);

              let Object1 = {
                date: this.state.date,
                mealType: this.state.meal_type,
                mealId: this.state.meal_id,
              };

              // add meal to calender
              MealsCalendar(Object1);

              let Object2 = {
                date: this.state.date,
                mealType: this.state.meal_type,
                productId: this.state.product_id,
              };

              // add products to calendar
              ProductCalendar(Object2);
            }}
          >
            ADD
          </Button>
        </Form>
      </div>
    );
  }
}
export default CalendarAdd;
