import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
class CountProfile extends React.Component {
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Training Activity</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Training Activity</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Count
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
export default CountProfile;
