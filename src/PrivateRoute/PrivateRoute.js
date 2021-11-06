import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
