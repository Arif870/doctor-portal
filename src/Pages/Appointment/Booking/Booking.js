import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Booking({ booking }) {
  const { name, time, space } = booking;
  return (
    <div>
      <Box
        sx={{
          minWidth: 275,
          boxShadow: "0px 4px 9px #4e4e4e29",
          borderRadius: "10px",
        }}
      >
        <Card variant="" style={{ textAlign: "center", paddingBottom: "20px" }}>
          <React.Fragment>
            <CardContent>
              <Typography
                style={{ color: "var(--primary-color)", fontWeight: "bold" }}
                variant="h6"
              >
                {name}
              </Typography>

              <Typography
                style={{
                  margin: "10px 0px",
                  display: "block",
                }}
                variant="p"
              >
                {time}
              </Typography>

              <Typography
                style={{ color: "var(--body-text-color)" }}
                variant="p"
              >
                {space} spaces avliable
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
              }}
            >
              Book Now{" "}
              <i
                className="fas fa-chevron-circle-right"
                style={{ marginLeft: "10px" }}
              ></i>
            </Button>
          </React.Fragment>
        </Card>
      </Box>
    </div>
  );
}
