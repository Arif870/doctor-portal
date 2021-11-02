import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

export default function Service(props) {
  const { name, desc, img } = props.service;
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
                marginY: "10px",
              }}
              component="img"
              image={img}
              alt="doctor portal img"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">{desc}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </div>
  );
}
