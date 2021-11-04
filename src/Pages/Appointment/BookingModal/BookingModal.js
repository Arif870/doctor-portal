import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import "./BookingModel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "0px 4px 9px #4e4e4e29",
  borderRadius: "10px",
  p: 4,
};

const handleSend = () => {
  // Send data to database
};

export default function BookingModal({
  open,
  handleOpen,
  handleClose,
  booking,
  date,
}) {
  const { name, time } = booking;
  return (
    <div>
      <Container>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <form>
                <Typography
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "var(--primary-color)",
                    display: "block",
                  }}
                  variant="p"
                >
                  {name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField style={{ width: "100%" }} value={time} disabled />
                </Box>
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
                  <TextField style={{ width: "100%" }} label="Phone Number" />
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
                  <TextField
                    disabled
                    style={{ width: "100%" }}
                    value={date.toDateString()}
                  />
                </Box>

                <Button
                  onClick={handleClose}
                  variant="contained"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    fontWeight: "bold",
                    float: "right",
                    margin: "12px",
                  }}
                >
                  Book{" "}
                </Button>
              </form>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
}
