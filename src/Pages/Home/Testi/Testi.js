import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Testi(props) {
  const { name, comments, city, img } = props.comments;
  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          boxShadow: "0px 4px 9px #4e4e4e29",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <img style={{ width: "60px" }} src={img} alt="" />
            <Box sx={{ marginLeft: "20px" }}>
              <Typography variant="h6" component="div">
                {name}
              </Typography>
              <Typography
                style={{ fontSize: "15px", color: "var(--primary-color)" }}
                variant="p"
                component="div"
              >
                {city}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{ fontSize: 14, marginTop: "20px" }}
            color="text.secondary"
            gutterBottom
          >
            {comments}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
