import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContainerBlogsRoute from "./components/ContainerBlogsRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerBlogsRoute />
    </div>
  );
}

export default App;
