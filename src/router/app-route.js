import React from "react";
import { Route } from "react-router";

const AppRoute = ({ ...props }) => {
  return <Route {...props} />;
};

export default AppRoute;
