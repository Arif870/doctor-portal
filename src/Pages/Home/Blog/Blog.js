import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import blogimg from "../../../images/blogbackground.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

export default function Blog() {
  return (
    <div style={{ margin: "70px 0px", textAlign: "center" }}>
      <Container>
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
          Doctor Blog
        </Typography>
        <Typography variant="h4">Latest Blog News</Typography>

        <Box style={{ marginTop: "70px" }} sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Link to="/">
                <img
                  style={{
                    boxShadow: "rgb(78 78 78 / 40%) 0px 4px 9px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  src={blogimg}
                  alt="blog"
                />
              </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Card
                sx={{
                  minWidth: 275,
                  boxShadow: "0px 4px 9px #4e4e4e29",
                  borderRadius: "10px",
                }}
              >
                <CardContent style={{ textAlign: "left" }}>
                  <div style={{ display: "flex" }}>
                    <img style={{ width: "60px" }} src={people2} alt="" />
                    <div style={{ marginLeft: "20px" }}>
                      <Typography variant="h6">Dr. Willams kinlle</Typography>
                      <Typography
                        style={{
                          color: "var(--body-text-color)",
                        }}
                        variant="p"
                      >
                        4th Nov 2021
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: "30px",
                      color: "var(--secondary-color)",
                    }}
                  >
                    75 Top-Notch Medical Blogs Every Health Care
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "var(--body-text-color)",
                      marginTop: "10px",
                      display: "block",
                    }}
                  >
                    But there is a downside. Simply running a search for medical
                    blogs will lead to a heap of results. And figuring out which
                    sources are reputable can take a lot of time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Card
                sx={{
                  minWidth: 275,
                  boxShadow: "0px 4px 9px #4e4e4e29",
                  borderRadius: "10px",
                }}
              >
                <CardContent style={{ textAlign: "left" }}>
                  <div style={{ display: "flex" }}>
                    <img style={{ width: "60px" }} src={people3} alt="" />
                    <div style={{ marginLeft: "20px" }}>
                      <Typography variant="h6">Dr. Hilary clinton</Typography>
                      <Typography
                        style={{
                          color: "var(--body-text-color)",
                        }}
                        variant="p"
                      >
                        4th Nov 2021
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: "30px",
                      color: "var(--secondary-color)",
                    }}
                  >
                    Every Health Care Top-Notch Medical Blogs
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      color: "var(--body-text-color)",
                      marginTop: "10px",
                      display: "block",
                    }}
                  >
                    But there is a downside. Simply running a search for medical
                    blogs will lead to a heap of results. And figuring out which
                    sources are reputable can take a lot of time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
