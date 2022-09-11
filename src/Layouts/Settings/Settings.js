import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import { getUserProfile } from "../../store/actions";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";

class Settings extends React.Component {
  componentDidMount() {
    this.props.getUserProfile();
  }
  render() {
    return (
      <Aux>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Header style={{ bottom: "50px" }}>
                <img
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                  src={
                    this.props.userInfo.hasOwnProperty("firstname")
                      ? this.props.userInfo.firstName.slice(-1) === "a"
                        ? avatar1
                        : avatar2
                      : avatar2
                  }
                  alt="activity-user"
                />
                <h5>{this.props.userInfo.username}</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        value={this.props.userInfo.email}
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        value={this.props.userInfo.username}
                        placeholder="Username"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={this.props.userInfo.firstName}
                      placeholder="First Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={this.props.userInfo.lastName}
                      placeholder="Last Name"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => dispatch(getUserProfile())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
