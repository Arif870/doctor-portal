import { Container, Grid } from "@mui/material";
import React from "react";
import Appointments from "../../Appointments/Appointments";
import Calender from "../../Shared/Calender/Calender";

export default function Dashboard() {
  const [date, setDate] = React.useState(new Date());
  return (
    <div style={{ marginTop: "50px" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Appointments date={date} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
