import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import contactusbg from "../../../images/contactformbg.png";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div
      style={{
        marginTop: "70px",
        display: "block",
      }}
    >
      <Container>
        <Typography
          variant="p"
          style={{
            color: "var(--primary-color)",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "20px",
            textAlign: "center",
            display: "block",
          }}
        >
          Contact From
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Contact With Us
        </Typography>

        <Box
          className="contactusform"
          style={{
            width: "75%",
            margin: "auto",
            display: "block",
            backgroundImage: `url(${contactusbg})`,
            backgroundPosition: "center center",
            backgroundSize: "200px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form className="contactUs">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField style={{ width: "100%" }} label="Name" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField style={{ width: "100%" }} label="Email" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField style={{ width: "100%" }} label="Subject" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                "& > :not(style)": { m: 1 },
              }}
            >
              <TextareaAutosize
                minRows={7}
                placeholder="Message"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "transparent",
                  borderColor: "#b9b9b9",
                  borderRadius: 5,
                }}
                label="Message"
              />
            </Box>

            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
                display: "block",
                margin: "12px auto",
              }}
            >
              Send To Doctor Portal{" "}
              <i
                style={{ marginLeft: "10px" }}
                className="fas fa-long-arrow-alt-right"
              ></i>
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}
