import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { Container, List, ListItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import "./Navigation.css";

export default function Navigation() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Link to="/">
            <i
              className="fas fa-home"
              style={{ marginRight: "10px", color: "var(--primary-color)" }}
            ></i>{" "}
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/appointment">
            <i
              className="fas fa-calendar-check"
              style={{ marginRight: "10px", color: "var(--primary-color)" }}
            ></i>
            Appointment
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/login">
            <i
              className="fas fa-sign-in-alt"
              style={{ marginRight: "10px", color: "var(--primary-color)" }}
            ></i>
            Login
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#ffffff", boxShadow: 0 }}
          >
            <Toolbar>
              {["left"].map(anchor => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}

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
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#333333", fontWeight: "normal" }}>
                  Login
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </div>
  );
}
