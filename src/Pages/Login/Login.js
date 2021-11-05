import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginbg from "../../images/loginbg.png";
import loginimg from "../../images/loginimg.png";
import "./Login.css";

export default function Login() {
  const [logInData, setLoginData] = useState({});

  const handleLoginSubmit = e => {
    e.preventDefault();
  };

  const changeHandalar = e => {
    const value = e.target.value;
    const field = e.target.name;

    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  console.log(logInData);

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
          <form
            onSubmit={handleLoginSubmit}
            className="loginformsizecontrol"
            style={{ width: "500px" }}
          >
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="filled-basic"
              label="Email"
              type="email"
              name="email"
              variant="filled"
              onChange={changeHandalar}
            />
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label="Password"
              type="password"
              name="password"
              variant="filled"
              onChange={changeHandalar}
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
                  Please Registration
                </Link>
              }
            </Typography>
            <Button
              variant="contained"
              type="submit"
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
