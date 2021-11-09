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
import useAuth from "../../../Hooks/useAuth";

export default function Navigation() {
  const { user, userLogOut, admin } = useAuth();
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
        {user?.displayName && (
          <img
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              margin: "auto",
              display: "block",
              border: "2px solid var(--primary-color)",
              marginTop: "20px",
            }}
            src={user.photoURL}
            alt=""
          />
        )}
        {user?.email && (
          <Typography
            style={{
              color: "var(--body-text-color)",
              fontWeight: "lightt",
              textAlign: "center",
              marginTop: "5px",
              fontSize: "12px",
            }}
          >
            {user.email}
          </Typography>
        )}
        {user?.displayName && (
          <Typography
            variant="h6"
            style={{
              color: "var(--primary-color)",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {user.displayName}
          </Typography>
        )}
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          <ListItem>
            <i
              className="fas fa-home"
              style={{ marginRight: "20px", color: "var(--primary-color)" }}
            ></i>{" "}
            Home
          </ListItem>
        </Link>
        {user.email && (
          <Box>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <ListItem>
                <i
                  className="fas fa-tachometer-alt"
                  style={{ marginRight: "20px", color: "var(--primary-color)" }}
                ></i>{" "}
                Dashboard
              </ListItem>
            </Link>
            {admin && (
              <Box style={{ marginLeft: "30px" }}>
                <Link
                  to="/addDoctor"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <ListItem>
                    <i
                      className="fas fa-user-md"
                      style={{
                        marginRight: "20px",
                        color: "var(--primary-color)",
                      }}
                    ></i>{" "}
                    Add a doctor
                  </ListItem>
                </Link>
                <Link
                  to="/makeAdmin"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <ListItem>
                    <i
                      className="fas fa-user-tie"
                      style={{
                        marginRight: "20px",
                        color: "var(--primary-color)",
                      }}
                    ></i>{" "}
                    Make Admin
                  </ListItem>
                </Link>
              </Box>
            )}
          </Box>
        )}
        <Link
          to="/appointment"
          style={{ textDecoration: "none", color: "#333" }}
        >
          <ListItem>
            <i
              className="fas fa-calendar-check"
              style={{ marginRight: "20px", color: "var(--primary-color)" }}
            ></i>
            Appointment
          </ListItem>
        </Link>

        {user?.email ? (
          <Link to="/login" style={{ textDecoration: "none", color: "#333" }}>
            <ListItem onClick={userLogOut}>
              <i
                className="fas fa-sign-in-alt"
                style={{ marginRight: "20px", color: "var(--primary-color)" }}
              ></i>
              LogOut
            </ListItem>
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: "none", color: "#333" }}>
            <ListItem>
              <i
                className="fas fa-sign-in-alt"
                style={{ marginRight: "10px", color: "var(--primary-color)" }}
              ></i>
              Login
            </ListItem>
          </Link>
        )}
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

              {user?.email ? (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={userLogOut}
                    style={{
                      backgroundColor: "var(--secondary-color)",
                      fontWeight: "bold",
                      display: "block",
                    }}
                  >
                    LogOut{" "}
                    <i
                      className="fas fa-sign-in-alt"
                      style={{ marginLeft: "10px" }}
                    ></i>
                  </Button>
                </Link>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    style={{
                      backgroundColor: "var(--secondary-color)",
                      fontWeight: "bold",
                      display: "block",
                    }}
                  >
                    Login{" "}
                    <i
                      className="fas fa-sign-in-alt"
                      style={{ marginLeft: "10px" }}
                    ></i>
                  </Button>
                </Link>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </div>
  );
}
