import "./styles.css";
import "./other.css";
import React from "react";
import Home from "./HomePage/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Header from "./HomePage/Header";
import About from "./AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="home" Component={Home} />
        <Route exact path="contact" Component={Contact} />
        <Route exact path="about" Component={About} />
      </Routes>
    </div>
  );
}
export default App;
