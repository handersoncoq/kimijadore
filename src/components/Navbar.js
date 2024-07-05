// src/components/Navbar.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  flex-direction: row;
  position: absolute;
  top: 60px;
  right: 0;
  background: ${({ theme }) => theme.background};
  width: 100%;
  text-align: right;
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  box-shadow: ${({ open }) => (open ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none")};
  margin-top: ${({ open }) => (open ? "1.5rem" : "0")};
`;

const NavItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin: 0;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.brandName};
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
`;

const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.hamburgerBackground};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.hamburgerBars};
  cursor: pointer;
`;

const ThemeSwitch = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  margin-left: 1rem;
`;

const StyledFaBars = styled(FaBars)`
  width: 28px;
  height: 28px;
`;

const StyledFaTimes = styled(FaTimes)`
  width: 28px;
  height: 28px;
`;

const MenuItems = [
  { name: "Home", link: "/" },
  { name: "About Me", link: "/about-me" },
  { name: "My Contents", link: "/my-contents" },
  { name: "Contact Me", link: "/contact-me" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Nav theme={theme}>
      <Link to="/" style={{ color: theme.brandName, textDecoration: "none" }}>
        <h1>Kimi J'adore</h1>
      </Link>
      <Hamburger onClick={toggleMenu} theme={theme}>
        {open ? <StyledFaTimes /> : <StyledFaBars />}
      </Hamburger>
      <NavList open={open} theme={theme}>
        {MenuItems.map((item) => (
          <NavItem key={item.name} theme={theme}>
            <NavLink to={item.link} theme={theme} onClick={toggleMenu}>
              {item.name}
            </NavLink>
          </NavItem>
        ))}
        <NavItem>
          <ThemeSwitch onClick={toggleTheme} theme={theme}>
            {theme.name === "dark" ? <FaSun /> : <FaMoon />}
          </ThemeSwitch>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
