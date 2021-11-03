import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bannerbg from "../../../images/bannerbg.png";
import bannerimg from "../../../images/bannerimg.jpg";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(${bannerbg})`,
          backgroundSize: "cover",
          height: "560px",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} md={5}>
              <div>
                <Typography variant="h4">
                  We Takecare of your Wealth, Which is Health.
                </Typography>
                <Typography
                  variant="p"
                  style={{
                    color: "var(--body-text-color)",
                    margin: "20px 0px",
                    display: "block",
                  }}
                >
                  This is most popular healthcare in this city. Ullam atque
                  labore, provident exercitationem perspiciatis libero dolores
                  ad beatae quis obcaecati! Quidem tenetur quae omnis
                  perferendis incidunt nihil sint sunt ea.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link to="/appointment" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "var(--secondary-color)",
                        fontWeight: "bold",
                      }}
                    >
                      Get Appointment{" "}
                      <i
                        className="fas fa-chevron-circle-right"
                        style={{ marginLeft: "10px" }}
                      ></i>
                    </Button>
                  </Link>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <img style={{ width: "100%" }} src={bannerimg} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
