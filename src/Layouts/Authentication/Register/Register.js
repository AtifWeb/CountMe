import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {Form} from 'react-bootstrap';

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { register } from "../../../store/actions";

class Register extends React.Component {
  renderInput = ({
    input,
    type,
    placeholder,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <div>
        {touched && error && <label style={{ color: "red" }}>{error}</label>}
        <div className={custom.className}>
          <input
            {...input}
            type={type}
            className="form-control"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  };

  onSubmit = credentials => {
    this.props.register(credentials);
  };

  render() {
    return (
      <Aux>
        <Breadcrumb />
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="feather icon-user-plus auth-icon" />
                </div>
                <h3 className="mb-4">Sign up</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field
                    name="firstName"
                    type="text"
                    component={this.renderInput}
                    placeholder="First Name"
                    className="input-group mb-3"
                  />
                  <Field
                    name="username"
                    type="text"
                    component={this.renderInput}
                    placeholder="Username"
                    className="input-group mb-3"
                  />
                  <Field
                    name="email"
                    type="text"
                    component={this.renderInput}
                    placeholder="Email"
                    className="input-group mb-3"
                  />
                  <Field
                    name="password"
                    type="password"
                    component={this.renderInput}
                    placeholder="Password"
                    className="input-group mb-3"
                  />
                  <Field
                    name="age"
                    type="text"
                    component={this.renderInput}
                    placeholder="Age"
                    className="input-group mb-3"
                  />
                  
                  <Form.Group>
                    <Form.Check inline custom type="radio" label="Male"value="1" name="supportedRadios" id="supportedRadio3" />
                    <Form.Check inline custom type="radio" label="Female" value="0" name="supportedRadios" id="supportedRadio4"/>
                  </Form.Group>
                  <Field
                    name="weight"
                    type="text"
                    component={this.renderInput}
                    placeholder="Weight"
                    className="input-group mb-3"
                  />
                  <Field
                    name="height"
                    type="text"
                    component={this.renderInput}
                    placeholder="Height"
                    className="input-group mb-3"
                  />
                  <Field
                    name="trainingActivity"
                    type="text"
                    component={this.renderInput}
                    placeholder="Training activity"
                    className="input-group mb-3"
                   >
                   <option disabled selected value> - wybierz z listy - </option>
                       <option value="1.2">Mała</option>
                       <option value="1.4">Średnia</option>
                       <option value="1.6">Duża</option>
                       <option value="1.8">Bardzo duża</option>
                    </Field>
                    
                  <Form.Control 
                  as="select"
                    name="trainingActivity"
                    type="text"
                    component={this.renderInput}
                    placeholder="Training activity"
                    className="mb-3" >
                    
                   <option disabled selected value> - wybierz z listy - </option>
                       <option value="1.2">Mała</option>
                       <option value="1.4">Średnia</option>
                       <option value="1.6">Duża</option>
                       <option value="1.8">Bardzo duża</option>
                  </Form.Control>
                  <button className="btn btn-primary shadow-2 mb-4">
                    Sign up
                  </button>
                </form>
                <p className="mb-0 text-muted">
                  Already have an account?{" "}
                  <NavLink to="/login">Sign in</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
    errors.email = "Enter valid email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    ).test(values.password)
  ) {
    errors.password =
      "Your password must contain at least 8 characters, one big letter, one digit and one special character.";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "register",
  validate
})(Register);

const mapDispatchToProps = {
  register: register
};

export default connect(null, mapDispatchToProps)(formWrapped);
