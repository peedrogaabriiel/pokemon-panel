import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

const AppRoute = ({ authenticated, ...props }) => {
  return props.private && !authenticated ? (
    <Redirect to="/login" />
  ) : (
    <Route {...props} />
  );
};

const mapStateToProps = ({ userAuth }) => ({
  authenticated: userAuth.authenticated
});

export default connect(mapStateToProps)(AppRoute);
