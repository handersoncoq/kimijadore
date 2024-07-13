import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  color: #333;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 1px -18px 9px rgba(0, 0, 0, 0.1);
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
