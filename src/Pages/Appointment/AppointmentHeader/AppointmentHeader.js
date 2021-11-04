import { Container, Grid } from "@mui/material";
import React from "react";
import chair from "../../../images/chair.png";
import Calender from "../../Shared/Calender/Calender.js";

export default function AppointmentHeader({ date, setDate }) {
  return (
    <div>
      <Container>
        <Grid container sx={{ marginTop: "50px" }}>
          <Grid item xs={12} md={12} lg={6}>
            <Calender date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <img style={{ width: "100%" }} src={chair} alt="chair" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
