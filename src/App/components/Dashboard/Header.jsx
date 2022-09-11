import React from "react";
import { connect } from "react-redux";
import "chartjs-plugin-labels";
import Image from "react-bootstrap/Image";
class Header extends React.Component {
  render() {
    return (
      <div className="HeaderDashboard">
        <h1>Home</h1>
        <Image
          className="ProfileImg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
      </div>
    );
  }
}
export default Header;
