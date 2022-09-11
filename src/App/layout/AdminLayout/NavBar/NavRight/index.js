import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../../../store/actions";
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import avatar1 from "../../../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../../../assets/images/user/avatar-2.jpg";

class NavRight extends Component {
  state = {
    listOpen: false
  };

  render() {
    return (
      <Aux>
        <ul className="navbar-nav ml-auto">
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <i className="icon feather icon-settings" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                  <img
                    src={
                      this.props.userInfo.hasOwnProperty("firstname")
                        ? this.props.userInfo.firstName.slice(-1) === "a"
                          ? avatar1
                          : avatar2
                        : avatar2
                    }
                    className="img-radius"
                    alt="User Profile"
                  />
                  <span>{this.props.userInfo.username}</span>

                  <a
                    onClick={() => this.props.logOut()}
                    href="#!"
                    className="dud-logout"
                    title="Logout"
                  >
                    <i className="feather icon-log-out" />
                  </a>
                </div>
                <ul className="pro-body">
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      <i className="feather icon-settings" /> Settings
                    </Link>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
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
    logOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavRight);
