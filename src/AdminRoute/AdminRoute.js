import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function AdminRoute({ children, ...rest }) {
  const { user, isLoading, admin } = useAuth();
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
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
