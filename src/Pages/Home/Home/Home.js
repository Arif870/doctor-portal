import React from "react";
import Ataglance from "../Ataglance/Ataglance";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Surgery from "../Surgery/Surgery";

export default function Home() {
  return (
    <div>
      <Banner />
      <Ataglance />
      <Services />
      <Surgery />
    </div>
  );
}
