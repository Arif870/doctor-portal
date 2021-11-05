import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import loginbg from "../../images/loginbg.png";
import loginimg from "../../images/loginimg.png";
import "./Login.css";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "40px 0px",
      }}
    >
      <Grid>
        <Grid item xs={12}>
          <img
            className="loginimgsizecontrol"
            style={{ margin: "auto", display: "block", width: "400px" }}
            src={loginimg}
            alt="loginpicture"
          />
        </Grid>
        <Grid item xs={12} style={{ margin: "auto", display: "block" }}>
          {" "}
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              color: "var(--primary-color)",
              fontWeight: "bold",
              margin: "30px 0px",
            }}
          >
            Please Login
          </Typography>
          <form className="loginformsizecontrol" style={{ width: "500px" }}>
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="filled-basic"
              label="Email"
              type="email"
              variant="filled"
            />
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label="Password"
              type="password"
              variant="filled"
            />
            <Typography
              variant="p"
              style={{
                marginTop: "10px",
                display: "block",
                color: "var(--body-text-color)",
              }}
            >
              New in Doctor Portal?{" "}
              {
                <Link
                  style={{
                    textDecoration: "none",
                    color: "var(--primary-color)",
                  }}
                  to="/registration"
                >
                  Registration first
                </Link>
              }
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
                display: "block",
                margin: "40px auto 0px",
                width: "150px",
              }}
            >
              Login{" "}
              <i
                className="fas fa-sign-in-alt"
                style={{ marginLeft: "10px" }}
              ></i>
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
