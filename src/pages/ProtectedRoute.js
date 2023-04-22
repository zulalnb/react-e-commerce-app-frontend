import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ component: Component, admin, ...rest }) {
  const { loggedIn, user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (admin && user.role !== "admin") {
          return <Redirect to={{ pathname: "/" }} />;
        }

        if (loggedIn) {
          return <Component {...props} />;
        }

        return <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
}

export default ProtectedRoute;
