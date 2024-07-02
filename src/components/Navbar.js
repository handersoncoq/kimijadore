import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes

const Nav = styled.nav`
  background: #ffc0cb;
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

  display: flex;
  flex-direction: row;
  position: absolute;
  top: 60px;
  right: 0;
  background: #ffc0cb;
  width: 100%;
  text-align: right;
  padding-right: 1rem;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  box-shadow: ${({ open }) => (open ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none")};
  margin-top: ${({ open }) => (open ? "1rem" : "0")};
`;

const NavItem = styled.li`
  color: white;
  margin: 0;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: darkred;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
`;

const StyledFaBars = styled(FaBars)`
  width: 25px;
  height: 25px;
`;

const StyledFaTimes = styled(FaTimes)`
  width: 25px;
  height: 25px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
        <h1>Kimi J'adore</h1>
      </Link>
      <Hamburger onClick={toggleMenu}>
        {open ? <StyledFaTimes /> : <StyledFaBars />}
      </Hamburger>
      <NavList open={open}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about-me">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/my-contents">My Contents</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact-me">Contact Me</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
