import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contents from "./pages/Contents";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/my-contents" element={<Contents />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
