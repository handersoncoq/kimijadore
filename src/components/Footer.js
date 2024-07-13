import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  color: #333;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
  font-size: smaller;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Foot>
      <p>&copy; {currentYear} Kimi J'adore. All Rights Reserved.</p>
    </Foot>
  );
};

export default Footer;
