import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContainerBlogsRoute from "./components/ContainerBlogsRoute";
import background from "./img/background.svg";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerBlogsRoute />

      <Footer />
      <img
        className="background-design"
        src={background}
        alt="background design"
      />
    </div>
  );
}

export default App;
