import React from "react";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvliableAppointment from "../AvliableAppointment/AvliableAppointment";

export default function Appointment() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate} />
      <AvliableAppointment date={date} />
    </div>
  );
}
