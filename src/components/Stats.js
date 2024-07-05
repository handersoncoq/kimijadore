import React from "react";
import styled from "styled-components";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem 0;
`;

const StatSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem 1rem;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const Subtitle = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.hihlightedText || "#888"};
  margin-top: 0.2rem;
`;

const GradientIcon = styled.div`
  font-size: 2rem;
  background: linear-gradient(45deg, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickableSpan = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover ${Title} {
    text-decoration: underline;
  }
`;

const Stats = () => {
  return (
    <Container>
      <ClickableSpan
        href="https://www.tiktok.com/@kimichella25"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StatSpan>
          <GradientIcon>
            <Title>
              {" "}
              <FaTiktok /> TIKTOK
            </Title>
          </GradientIcon>
          <Subtitle>73K+</Subtitle>
        </StatSpan>
      </ClickableSpan>
      <ClickableSpan
        href="https://www.instagram.com/kimichella25/channel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StatSpan>
          <GradientIcon>
            <Title>
              {" "}
              <FaInstagram /> INSTAGRAM
            </Title>
          </GradientIcon>
          <Subtitle>2.71K+</Subtitle>
        </StatSpan>
      </ClickableSpan>
      <StatSpan>
        <Title>90%</Title>
        <Subtitle>From U.S.</Subtitle>
      </StatSpan>
      <StatSpan>
        <Title>152K+</Title>
        <Subtitle>Reach</Subtitle>
      </StatSpan>
      <StatSpan>
        <Title>80%</Title>
        <Subtitle>Women</Subtitle>
      </StatSpan>
      <StatSpan>
        <Title>8%</Title>
        <Subtitle>Engagement</Subtitle>
      </StatSpan>
    </Container>
  );
};

export default Stats;
