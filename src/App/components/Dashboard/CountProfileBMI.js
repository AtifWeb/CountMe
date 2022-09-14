import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
class CountProfileBMI extends React.Component {
  state = {
    weight: "",
    height: "",
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
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Height"
              onChange={(e) => {
                this.setState({
                  height: e.target.value,
                });
              }}
              value={this.state.height}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight</Form.Label>
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
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              this.props.CountEvent({
                weight: Number(this.state.weight),
                height: Number(this.state.height),
              });
            }}
          >
            Count BMI
          </Button>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label>Results</Form.Label>
            <Form.Control type="text" placeholder="Results" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default CountProfileBMI;
