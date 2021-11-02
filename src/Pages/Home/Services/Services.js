import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Service from "../Home/Service/Service";
import healthcare from "../../../images/healthcare.png";

const services = [
  {
    name: "Teeth Specialist",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: healthcare,
  },
  {
    name: "Heath Specialist",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: "",
  },
  {
    name: "Teeth Specialist",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: "",
  },
  {
    name: "Teeth Specialist",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: "",
  },
  {
    name: "Teeth Specialist",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: "",
  },
  {
    name: "Teeth Specialist",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: "",
  },
];

export default function Services() {
  return (
    <div>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "normal", marginY: "50px" }}
      >
        {" "}
        Our Services
      </Typography>
      <Box sx={{ flexGrow: 1, textAlign: "center", borderRadius: "10px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
