import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";

import "../../assets/scss/style.scss";
import Sidebar from "../../App/components/Dashboard/Sidebar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CountProfile from "../../App/components/Dashboard/CountProfile";
import UpdateProfile from "../../App/components/Dashboard/UpdateProfile";
import CountProfileBMI from "../../App/components/Dashboard/CountProfileBMI";
import ChangePassword from "../../App/components/Dashboard/ChangePassword";
import MenuIcon from "@material-ui/icons/Menu";
import { getUserProfile, logOut } from "../../store/actions";
class UserProfile extends React.Component {
  state = {
    popup_active: false,
    popup_active_update: false,
    popup_activeBMI: false,
    popup_active_password: false,
    sidebarMBL: false,
  };
  createColorArray = () => {
    if (this.props.colorsArray.length === 0) {
      for (var i = 0; i < 30; i++) {
        let x = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        this.props.generateColors(x);
      }
    }
  };

  componentDidMount() {
    this.props.getUserProfile();
  }

  render() {
    return (
      <div className="dashbaord">
        <div className="header_wrapper_mbl">
          <MenuIcon
            onClick={(e) =>
              this.setState({
                sidebarMBL: !this.state.sidebarMBL,
              })
            }
          />
        </div>
        {this.state.popup_active && (
          <CountProfile
            ClosePopForm={(e) =>
              this.setState({
                popup_active: false,
              })
            }
          />
        )}
        {this.state.popup_active_password && (
          <ChangePassword
            ClosePopForm={(e) =>
              this.setState({
                popup_active_password: false,
              })
            }
          />
        )}

        {this.state.popup_activeBMI && (
          <CountProfileBMI
            ClosePopForm={(e) =>
              this.setState({
                popup_activeBMI: false,
              })
            }
          />
        )}

        {this.state.popup_active_update && (
          <UpdateProfile
            ClosePopForm={(e) =>
              this.setState({
                popup_active_update: false,
              })
            }
          />
        )}
        <Sidebar header_active={4} active={this.state.sidebarMBL} />
        <div className="dashboard_body">
          <div className="user_area">
            <div className="top_area">
              <div className="left_area">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  alt=""
                />
              </div>
              <div className="right_side">
                <h1>
                  Hi Atif <span>Asim</span>
                </h1>
                <div className="butons_wrapper">
                  {/* <button
                    onClick={(e) => {
                      this.setState({
                        popup_active_password: true,
                      });
                    }}
                  >
                    Update Password
                  </button> */}
                  <button
                    onClick={(e) => {
                      this.setState({
                        popup_active: true,
                      });
                    }}
                  >
                    Count your calories
                  </button>
                  <button
                    onClick={(e) => {
                      this.setState({
                        popup_activeBMI: true,
                      });
                    }}
                  >
                    Count your BMI
                  </button>
                  <button
                    onClick={(e) => {
                      this.props.logOut();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom_area">
              <div className="information_wrapper">
                <div className="container">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        value="Adam"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        value="Malik"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        value="AdamMalik123"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        value="AdamMalik123@gmail.com"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Age"
                        value="22"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Gender"
                        value="Male"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="AWeightge"
                        value="78"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Height</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Height"
                        value="170"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>BMI</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="BMI"
                        value="26"
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Training Activity</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Training Activity"
                        value="1.2"
                        readOnly
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      class="button_form"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          popup_active_update: true,
                        });
                      }}
                    >
                      Update
                    </Button>
                  </Form>
                </div>
              </div>
              {/* <div className="form_wrapper">
                <h1>Change your password</h1>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <div className="button_wrapper">
                    <Button variant="primary" type="submit">
                      Change
                    </Button>
                  </div>
                </Form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: () => dispatch(getUserProfile()),
    logOut: () => dispatch(logOut()),
  };
};

export default connect(null, mapDispatchToProps)(UserProfile);
