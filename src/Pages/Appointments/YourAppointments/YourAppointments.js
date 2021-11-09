import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

export default function YourAppointments({ yourAppointment }) {
  return (
    <Grid item xs={12} sm={6}>
      <Card
        variant=""
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 4px 9px #4e4e4e29",
          height: "230px",
        }}
      >
        <React.Fragment>
          <CardContent>
            <Typography variant="h6" style={{ color: "var(--primary-color)" }}>
              {yourAppointment.serviceName}
            </Typography>{" "}
            <Typography
              variant="p"
              style={{
                color: "var(--secondary-color)",
                marginBottom: "20px",
                display: "block",
              }}
            >
              Patients Name: {yourAppointment.patientName}
            </Typography>{" "}
            <Typography
              variant="p"
              style={{
                color: "var(--body-text-color)",
                marginBottom: "10px",
                display: "block",
              }}
            >
              <i
                className="fas fa-envelope"
                style={{
                  marginRight: "10px",
                  color: "lightgray",
                }}
              ></i>{" "}
              {yourAppointment.email}
            </Typography>{" "}
            <Typography
              variant="p"
              style={{
                color: "var(--body-text-color)",
                marginBottom: "10px",
                display: "block",
              }}
            >
              <i
                className="fas fa-calendar-day"
                style={{
                  marginRight: "10px",
                  color: "lightgray",
                }}
              ></i>{" "}
              {yourAppointment.date}
            </Typography>{" "}
            <Typography
              variant="p"
              style={{
                color: "var(--body-text-color)",
                marginBottom: "10px",
                display: "block",
              }}
            >
              <i
                className="fas fa-user-clock"
                style={{
                  marginRight: "10px",
                  color: "lightgray",
                }}
              ></i>{" "}
              {yourAppointment.time}
            </Typography>{" "}
            {yourAppointment.phone && (
              <Typography
                variant="p"
                style={{
                  color: "var(--body-text-color)",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                <i
                  className="fas fa-mobile"
                  style={{ marginRight: "10px", color: "lightgray" }}
                ></i>{" "}
                {yourAppointment.phone}
              </Typography>
            )}
          </CardContent>
        </React.Fragment>
      </Card>
    </Grid>
  );
}
