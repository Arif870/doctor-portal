import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import healthcare from "../../../images/healthcare.png";
import fluorid from "../../../images/flouride.png";
import eyecare from "../../../images/eyecare.png";
import brain from "../../../images/brain.png";
import lungs from "../../../images/lungs.png";
import kidney from "../../../images/kidney.png";

const services = [
  {
    name: "Health Care",
    desc: "Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: healthcare,
    type: "care open services",
  },
  {
    name: "Fluoride Treatment",
    desc: "Fluoride Treatment consectetur adipisicing elit, nostrum we have speliest",
    img: fluorid,
    type: "care open services",
  },
  {
    name: "Eye Specialist",
    desc: "Eye Specialist  amet consectetur adipisicing elit. Consectetur, nostrum",
    img: eyecare,
    type: "emergency",
  },
  {
    name: "Brain Specialist",
    desc: "Brain Specialist  amet consectetur adipisicing elit. Consectetur, norowey",
    img: brain,
    type: "emergency",
  },
  {
    name: "Lung Treatment",
    desc: " Lung Specialist  amet consectetur adipisicing elit. Consectetur UK",
    img: lungs,
    type: "emergency",
  },
  {
    name: "Kidney Transplant",
    desc: "Kidney Transplant  amet consectetur adipisicing elit. Consectetur, Swiden",
    img: kidney,
    type: "emergency",
  },
];

export default function Services() {
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "normal", marginY: "50px" }}
        >
          {" "}
          Our Services
        </Typography>
        <Box sx={{ flexGrow: 1, textAlign: "center", borderRadius: "10px" }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Service service={service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
