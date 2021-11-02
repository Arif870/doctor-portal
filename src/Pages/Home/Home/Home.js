import React from "react";
import Ataglance from "../Ataglance/Ataglance";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Ataglance />
      <Services></Services>
    </div>
  );
}
