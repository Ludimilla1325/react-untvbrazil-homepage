import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./components/ScrollToTop";
import TvVerdade from "./pages/HomePage/TvVerdade";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvverdade" element={<TvVerdade />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
