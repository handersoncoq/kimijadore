import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  position: sticky;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 18px 9px rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 0;
  margin-bottom: 1.5em;
  z-index: 10002;
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  margin: 0.5rem 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.background};
  padding-bottom: 0.5rem;
  right: 0.1em;
  position: absolute;
  z-index: 10002;
  top: 60px;
  width: 100%;
  text-align: left;
  padding-right: 1rem;
  padding-left: 1rem;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  box-shadow: ${({ open }) =>
    open ? "1px 18px 9px rgba(0, 0, 0, 0.1)" : "none"};
  margin-top: ${({ open }) => (open ? "1.5rem" : "0")};
`;

const NavItem = styled.li`
  color: ${({ theme }) => theme.text};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    color: darkred;
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
  margin-top: 0.5rem;
`;

const StyledFaBars = styled(FaBars)`
  width: 28px;
  height: 28px;
`;

const StyledFaTimes = styled(FaTimes)`
  width: 28px;
  height: 28px;
`;

const StyledFaSun = styled(FaSun)`
  width: 18px;
  height: 18px;
`;

const StyledFaMoon = styled(FaMoon)`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
`;

const MenuItems = [
  { name: "Home", link: "/" },
  { name: "About Me", link: "/about-me" },
  { name: "My Content", link: "/my-content" },
  { name: "Blog", link: "/blog" },
  { name: "Store", link: "/store" },
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
            <StyledHr />
            <NavLink to={item.link} theme={theme} onClick={toggleMenu}>
              {item.name}
            </NavLink>
          </NavItem>
        ))}
        <NavItem>
          <StyledHr />
          <ThemeSwitch onClick={toggleTheme} theme={theme}>
            {theme.name === "dark" ? <StyledFaSun /> : <StyledFaMoon />}
          </ThemeSwitch>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
