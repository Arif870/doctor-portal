import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import appointmentbg from "../../../images/appointment.png";
import "./HomeAppointment.css";
export default function HomeAppointment() {
  return (
    <div>
      <Container>
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "100px",
            gap: "30px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Make an Appointment Today</Typography>
            <Typography
              variant="p"
              style={{
                color: "var(--body-text-color)",
                marginTop: "40px",
                display: "block",
              }}
            >
              To help improve bodily function, appearance, or to repair unwanted
              ruptured areas. Surgery. The branch of medicine that employs
              operations in the treatment of disease or injury. Surgery can
              involve cutting, abrading, suturing, or otherwise physically
              changing body tissues and organs.The branch of medicine that
              employs operations in the treatment of disease or injury. Surgery
              can involve cutting, abrading, suturing, or otherwise physically
              changing body tissues and organs.
            </Typography>
            <Link to="/appointment" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                Make an appointment{" "}
                <i
                  className="fas fa-chevron-circle-right"
                  style={{ marginLeft: "10px" }}
                ></i>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <img style={{ width: "100%" }} src={appointmentbg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
