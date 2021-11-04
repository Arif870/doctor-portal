import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import logo from "../../../images/logo.png";
import footerbg from "../../../images/footerbg.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "block",
        marginTop: "100px",
      }}
    >
      <Container>
        <Grid
          sx={{ color: "white", p: 4 }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={3}>
            <Link to="/">
              <img
                style={{ marginLeft: "10px", display: "block" }}
                src={logo}
                alt="logo"
              />
            </Link>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Emergincey care
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Checkup
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Personal database
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Tooth extraction
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Checkup
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <Typography
              sx={{ m: 2, color: "var(--primary-color)", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Services
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Personal care
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Day night shift
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Cardiology center
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Tooth extraction
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Ambulance service
            </Typography>
          </Grid>

          <Grid item xs={2} sm={4} md={3}>
            <Typography
              sx={{ m: 2, color: "var(--primary-color)", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Kindeny special care
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Kidney dialayses
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Kidney transplant
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Blood cleaning
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              kideny extraction
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Exercise
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <Typography
              sx={{ m: 2, color: "var(--primary-color)", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Connect with us
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              You can ealisy connect with us by following
            </Typography>
            <Typography
              style={{
                color: "var(--primary-color)",
                display: "flex",
                gap: "15px",
                fontSize: "26px",
                margin: "20px 0px 0px 10px",
              }}
            >
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter-square"></i>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}
        >
          Copyright &copy; 2021. All rights reserved Doctor portal
        </Typography>
      </Container>
    </div>
  );
}
