import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import surgery from "../../../images/operation.jpg";

export default function Surgery() {
  return (
    <div>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginTop: "100px",
          }}
        >
          <Grid item xs={12} sm={12} md={5}>
            <img style={{ width: "100%" }} src={surgery} alt="surgery" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4">
              Surgery is a medical or dental specialty
            </Typography>
            <Typography
              variant="p"
              style={{
                color: "var(--body-text-color)",
                marginTop: "40px",
                display: "block",
              }}
            >
              Surgery is a medical or dental specialty that uses operative
              manual and instrumental techniques on a person to investigate or
              treat a pathological condition such as a disease or injury, to
              help improve bodily function, appearance, or to repair unwanted
              ruptured areas. Surgery. The branch of medicine that employs
              operations in the treatment of disease or injury. Surgery can
              involve cutting, abrading, suturing, or otherwise physically
              changing body tissues and organs.The branch of medicine that
              employs operations in the treatment of disease or injury. Surgery
              can involve cutting, abrading, suturing, or otherwise physically
              changing body tissues and organs.
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              Read more{" "}
              <i
                className="fas fa-chevron-circle-right"
                style={{ marginLeft: "10px" }}
              ></i>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
