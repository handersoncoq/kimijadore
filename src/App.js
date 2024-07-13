import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./context/ThemeContext";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto 1em;
  @media (min-width: 768px) {
    padding: 0.5rem 3rem;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/my-content" element={<Content />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrapper>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
