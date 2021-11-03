import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#ffffff", boxShadow: 0 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#333333" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              <Box sx={{ marginY: "20px" }}>
                <Link to="/">
                  {" "}
                  <img src={logo} alt="logo" />
                </Link>
              </Box>
            </Typography>
            <Button sx={{ color: "#333333", fontWeight: "normal" }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
