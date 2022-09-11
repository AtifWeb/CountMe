import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
class CountProfileBMI extends React.Component {
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
            <Form.Label>Height</Form.Label>
            <Form.Control type="text" placeholder="Enter Height" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="text" placeholder="Enter Weight" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
