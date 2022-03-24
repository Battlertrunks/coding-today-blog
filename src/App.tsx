import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContainerBlogsRoute from "./components/ContainerBlogsRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerBlogsRoute />

      <Footer />
    </div>
  );
}

export default App;
