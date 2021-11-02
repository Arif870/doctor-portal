import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Ataglance() {
  return (
    <Grid
      container
      style={{
        gap: "30px",
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        flex: "wrap",
        marginTop: "-40px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--secondary-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <i
          className="fas fa-clock"
          style={{ fontSize: "45px", marginRight: "20px" }}
        ></i>
        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Opning Hour
          </Typography>
          <Typography variant="h6" style={{ fontSize: "13px" }}>
            Everyday 8AM - 10AM. Our emergincy is always open.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--primary-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <i
          className="fas fa-map-marker-alt"
          style={{ fontSize: "45px", marginRight: "20px" }}
        ></i>

        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Our Location
          </Typography>
          <Typography variant="h6" style={{ fontSize: "13px" }}>
            Uttara Lake road, sector 10, uttara, Dhaka, Bangladesh.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--secondary-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <i
          className="fas fa-mobile-alt"
          style={{ fontSize: "45px", marginRight: "20px" }}
        ></i>
        <Box>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Contact us Now
          </Typography>
          <Typography variant="h6" style={{ fontSize: "13px" }}>
            +880 1947729183 <br />
            +880 9288288273
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
