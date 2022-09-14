import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
import { ProductCalendar } from "../../../store/actions";
class CalendarAddProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    dateTime: "",
    mealType: 0,
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
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="24.08.2022"
              onChange={(e) => {
                this.setState({
                  dateTime: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Meal Type</Form.Label>
            <Form.Select
              onChange={(e) => {
                this.setState({
                  mealType: e.target.value,
                });
              }}
            >
              <option value="0">breakfast</option>
              <option value="1">lunch</option>
              <option value="2">dinner</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let Object = {
                date: this.state.dateTime,
                mealType: this.state.mealType,
                productId: window.sessionStorage.getItem("product_id"),
              };

              ProductCalendar(Object);
            }}
          >
            ADD
          </Button>
        </Form>
      </div>
    );
  }
}
export default CalendarAddProduct;
