import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import quote from "../../../images/quote.png";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import Testi from "../Testi/Testi";

const testimonial = [
  {
    name: "Willson Harry",
    comments:
      "we are very happy  quisquam repellat, voluptates expedita atque doloremque, unde voluptate ipsa praesentium reiciendis nesciunt? Non, ab deleniti repudiandae iure, quaerat recusandae, velit porro assumenda tempore nulla odio",
    city: "Washington DC",
    img: people1,
  },
  {
    name: "Cats Wingslate",
    comments:
      "I sm suppering for  4 days voluptates expedita atque doloremque, unde voluptate ipsa praesentium reiciendis nesciunt? Non, ab deleniti repudiandae iure, quaerat recusandae, velit porro assumenda tempore nulla odio",
    city: "Cillcon Vally",
    img: people2,
  },
  {
    name: "kutty perry",
    comments:
      "I have sloved my ussue and are very happy  quisquam repellat, voluptates expedita atque doloremque, unde voluptate ipsa praesentium reiciendis nesciunt? Non, ab deleniti repudiandae iure, quaerat recusandae, ipsa praesentium reiciendis ",
    city: "United kingdom",
    img: people3,
  },
];

export default function Testimonial() {
  return (
    <div>
      <Container>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "100px",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="p"
              style={{
                color: "var(--primary-color)",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "20px",
                display: "block",
              }}
            >
              Testimonial
            </Typography>
            <Typography variant="h4">Whats our Patients says</Typography>
          </Grid>
          <Grid item xs={12}>
            <img style={{ width: "120px" }} src={quote} alt="" />
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            style={{ marginTop: "20px" }}
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {testimonial.map((comments, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Testi comments={comments}></Testi>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
