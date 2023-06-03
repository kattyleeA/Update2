import React from "react";
import Footer from "../HomePage/Footer";
function Contact() {
  return (
    <div id="contact" className="Contact">
      <form class="form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input className="Input" placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input
            className="Input"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>
        <p type="Message:">
          <input
            className="Input"
            placeholder="What would you like to tell us.."
          ></input>
        </p>
        <button className="contact-btn">Send Message</button>
        <div className="contact-span">
          <span class="fa fa-phone"></span>001 1023 567
          <span class="fa fa-envelope-o"></span> contact@company.com
        </div>
      </form>
      <Footer />
    </div>
  );
}
export default Contact;
