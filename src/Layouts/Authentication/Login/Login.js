import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm, propTypes } from "redux-form";
import { connect } from "react-redux";
import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { logIn } from "../../../store/actions";

class Login extends React.Component {
  renderInput = ({
    input,
    type,
    placeholder,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <div>
        {touched && error && (
          <span style={{ color: "red", marginBottom: "3px" }}>{error}</span>
        )}
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

  static propTypes = {
    ...propTypes,
  };

  renderCheckBox = ({ input, name, type, id, ...custom }) => {
    return <input type={type} name={type} id={id} />;
  };

  onSubmit = (credentials) => {
    console.log(credentials);
    this.props.logIn();
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
                  <i className="feather icon-unlock auth-icon" />
                </div>
                <h3 className="mb-4">Sign in</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field
                    name="username"
                    type="text"
                    component={this.renderInput}
                    placeholder="Username"
                    className="input-group mb-3"
                  />
                  <Field
                    name="password"
                    type="password"
                    component={this.renderInput}
                    placeholder="Password"
                    className="input-group mb-4"
                  />
                  {/* <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                      <Field
                        name="checkbox-fill-1"
                        type="checkbox"
                        id="checkbox-fill-a1"
                        component={this.renderCheckBox}
                      />
                      <label htmlFor="checkbox-fill-a1" className="cr">
                        {" "}
                        Save credentials
                      </label>
                    </div>
                  </div> */}

                  <button className="btn btn-primary shadow-2 mb-4">
                    Sign in
                  </button>
                </form>
                {/* <p className="mb-2 text-muted">
                  Forgot password? <NavLink to="/resetPassword">Reset</NavLink>
                </p> */}
                <p className="mb-0 text-muted">
                  Don’t have an account?{" "}
                  <NavLink exact to="/register">
                    Sign up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

// const asyncValidate = (values /*, dispatch */) => {
//   return sleep(1000).then(() => {
//     // simulate server latency
//     if (["john", "paul", "george", "ringo"].includes(values.username)) {
//       throw { username: "That username is taken" };
//     }
//   });
// };

const formWrapped = reduxForm({
  form: "login",
  validate,
})(Login);

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => dispatch(logIn(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(formWrapped);
