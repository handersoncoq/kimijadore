import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.aboutPage.background};
  color: ${({ theme }) => theme.aboutPage.text};
  box-shadow: 1px 18px 9px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: auto 0;
  padding: 0 1rem;
  padding-top: 0.5rem;
  font-family: "Allura", cursive;
`;

const Subtitle = styled.p`
  font-size: 0.7rem;
  padding: 0 1rem;
  padding-bottom: 1rem;
  margin-top: -0.8rem;
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderContainer theme={theme}>
      <Title>Kimi J'adore</Title>
      <Subtitle>FASHION | SKINCARE | LIFESTYLE</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
