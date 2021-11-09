import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import YourAppointments from "./YourAppointments/YourAppointments";

export default function Appointments({ date }) {
  const [yourAppointment, setYourAppointment] = useState([]);
  const { user } = useAuth();
  let appointmantDate = date.toLocaleDateString();

  useEffect(() => {
    const uri = `https://rocky-sierra-48199.herokuapp.com/appointments?email=${user.email}&date=${appointmantDate}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setYourAppointment(data));
  }, [user.email, appointmantDate]);

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

      {yourAppointment.length === 0 ? (
        <Typography variant="h5" style={{ marginTop: "30px" }}>
          No appointment on {appointmantDate}{" "}
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          {yourAppointment.map(yourAppointment => (
            <YourAppointments
              key={yourAppointment._id}
              yourAppointment={yourAppointment}
            ></YourAppointments>
          ))}
        </Grid>
      )}
    </div>
  );
}
