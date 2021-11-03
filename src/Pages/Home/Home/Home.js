import React from "react";
import Ataglance from "../Ataglance/Ataglance";
import Banner from "../Banner/Banner";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import Services from "../Services/Services";
import Surgery from "../Surgery/Surgery";
import Testimonial from "../Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <Ataglance />
      <Services />
      <Surgery />
      <HomeAppointment />
      <Testimonial />
    </div>
  );
}
