import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import YourAppointments from "./YourAppointments/YourAppointments";

export default function Appointments() {
  const [yourAppointment, setYourAppointment] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const uri = `http://localhost:5000/appointments`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setYourAppointment(data));
  }, []);
  return (
    <div>
      <Typography
        variant="h6"
        style={{
          backgroundColor: "var(--secondary-color)",
          color: "white",
          textAlign: "center",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        {" "}
        Hey, {user.displayName} here is your all Appointments
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {yourAppointment.map(yourAppointment => (
          <YourAppointments
            key={yourAppointment._id}
            yourAppointment={yourAppointment}
          ></YourAppointments>
        ))}
      </Grid>
    </div>
  );
}
