import { Container, Grid } from "@mui/material";
import React from "react";
import Appointments from "../../Appointments/Appointments";
import Calender from "../../Shared/Calender/Calender";

export default function Dashboard() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Calender></Calender>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Appointments />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
