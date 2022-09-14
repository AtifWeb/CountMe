import React from "react";
import "chartjs-plugin-labels";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseIcon from "@material-ui/icons/Close";
class CountProfile extends React.Component {
  state = {
    age: "",
    gender: 0,
    weight: "",
    height: "",
    trainingActivity: 0,
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              onChange={(e) => {
                this.setState({
                  age: e.target.value,
                });
              }}
              value={this.state.age}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <div className="mb-3 d-flex">
              <Form.Check
                type="radio"
                name="activity"
                label={`Male`}
                onClick={(e) => {
                  this.setState({
                    gender: 0,
                  });
                }}
              />

              <Form.Check
                type="radio"
                className="mx-4"
                onClick={(e) => {
                  this.setState({
                    gender: 1,
                  });
                }}
                name="activity"
                label={`Female`}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Training Activity</Form.Label>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  trainingActivity: e.target.value,
                });
              }}
            >
              <option>Training Activity</option>
              <option value="0">0</option>
              <option value="1">1</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              this.props.CountEvent({
                weight: Number(this.state.weight),
                height: Number(this.state.height),
                age: Number(this.state.age),
                trainingActivity: Number(this.state.trainingActivity),
                gender: Number(this.state.gender),
              });
            }}
          >
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
