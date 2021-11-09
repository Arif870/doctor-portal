import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

export default function AddDoctor() {
  return (
    <div>
      <Container>
        <Grid style={{ margin: "50px auto 0px", textAlign: "center" }}>
          <Grid>
            <TextField
              style={{ width: "50%", margin: "auto" }}
              label="Add a doctor"
              type="text"
              variant="filled"
            />
            <Button
              variant="h6"
              style={{
                width: "25%",
                textAlign: "center",
                display: "block",
                backgroundColor: "var(--secondary-color)",
                padding: "10px 20px",
                color: "white",
                borderRadius: "3px",
                margin: " 30px auto",
              }}
            >
              Add a new Doctor
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
