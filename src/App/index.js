import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { connect } from "react-redux";

import "../../node_modules/font-awesome/scss/font-awesome.scss";

import Loader from "./layout/Loader";
import Aux from "../hoc/_Aux";
import ScrollToTop from "./layout/ScrollToTop";
import routes from "../route";
import { getUserProfile } from "../store/actions";
import AuthenticatedRoute from "../AuthenticatedRoute";
import UnauthenticatedRoute from "../UnauthenticatedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader
});

class App extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.getUserProfile();
    }
  }

  render() {
    const menu = routes.map((route, index) => {
      return route.component ? (
        <UnauthenticatedRoute
          path={route.path}
          component={route.component}
          appProps={this.props.isLoggedIn}
          key={index}
          exact={route.exact}
          name={route.name}
        />
      ) : null;
    });

    return (
      <Aux>
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Switch>
              {menu}
              <AuthenticatedRoute
                path="/"
                component={AdminLayout}
                appProps={this.props.isLoggedIn}
              />
            </Switch>
          </Suspense>
        </ScrollToTop>
        <ToastContainer />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => dispatch(getUserProfile)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
