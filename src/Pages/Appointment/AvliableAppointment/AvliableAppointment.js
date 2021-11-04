import { Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

export default function AvliableAppointment({ date }) {
  return (
    <div>
      <Container>
        <Typography
          style={{ textAlign: "center", marginTop: "10px" }}
          variant="h4"
        >
          Avliable Appointment {date.toDateString()}
        </Typography>

        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {bookings.map((booking, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Booking date={date} booking={booking} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
