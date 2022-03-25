import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContainerBlogsRoute from "./components/ContainerBlogsRoute";
import background from "./img/background.svg";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Footer from "./components/Footer";
import BlogArticleRoute from "./components/BlogArticleRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContainerBlogsRoute />} />
          <Route path="/article/:id" element={<BlogArticleRoute />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
