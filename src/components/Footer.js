import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  color: #333;
  text-align: left;
  padding: 1rem 0;
  margin-top: 3rem;
  font-size: smaller;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Foot>
      <p>&copy; {currentYear} Kimi J'adore Portfolio</p>
    </Foot>
  );
};

export default Footer;
