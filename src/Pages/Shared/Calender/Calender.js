import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Typography } from "@mui/material";
import "./Calender.css";

export default function Calender({ date, setDate }) {
  return (
    <div style={{ width: "100%" }}>
      <Typography style={{ marginBottom: "20px" }} variant="h4">
        Select your appointment date
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          onChange={newValue => {
            setDate(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
