import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import "./BookingModel.css";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

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

export default function BookingModal({ open, handleClose, booking, date }) {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = e => {
    e.preventDefault();
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      time,
      date: date.toLocaleDateString(),
    };
    setBookingInfo(appointment);
    fetch("https://rocky-sierra-48199.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire("Thank you", "You appointment is successfull", "success");
          handleClose();
        }
      });
  };

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
              <form onSubmit={handleBookingSubmit}>
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
                  <TextField
                    name="patientName"
                    style={{ width: "100%" }}
                    label="Name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    name="phone"
                    style={{ width: "100%" }}
                    label="Phone Number"
                    onBlur={handleOnBlur}
                    defaultValue=""
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    name="email"
                    style={{ width: "100%" }}
                    label="Email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                  />
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
                  onClick={handleBookingSubmit}
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
