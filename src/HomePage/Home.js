import React from "react";
import Description from "./Description";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div id="home" className="Home">
      <Description />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Home;
