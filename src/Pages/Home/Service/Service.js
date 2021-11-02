import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

export default function Service(props) {
  const { name, desc, img, type } = props.service;
  return (
    <div>
      <Box
        sx={{
          minWidth: 275,
          boxShadow: "0px 4px 9px #4e4e4e29",
          borderRadius: "10px",
        }}
      >
        <Card variant="" sx={{ borderRadius: "10px" }}>
          <React.Fragment>
            <CardMedia
              sx={{
                width: "150px",
                margin: "auto",
                display: "block",
                marginTop: "10px",
              }}
              component="img"
              image={img}
              alt="doctor portal img"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography
                variant="small"
                sx={{ mb: 1.5, color: "var(--primary-color)" }}
              >
                {type}
              </Typography>{" "}
              <br />
              <br />
              <Typography
                variant="p"
                style={{ color: "var(--body-text-color)" }}
              >
                {desc}
              </Typography>
            </CardContent>
            <Box>
              <i
                className="fas fa-long-arrow-alt-right"
                style={{
                  color: "var(--secondary-color)",
                  fontSize: "20px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  display: "block",
                  cursor: "pointer",
                }}
              ></i>
            </Box>
          </React.Fragment>
        </Card>
      </Box>
    </div>
  );
}
