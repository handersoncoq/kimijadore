import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import profilePic from "../assets/media/pictures/mirror_selfie.png";
import { aboutPics } from "../components/Pictures";
import Stats from "../components/Stats";
import PictureLayout from "../components/PictureLayout";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const FlexRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FlexItem = styled.div`
  flex: 1;
  padding: 0;
`;

const Image = styled.img`
  width: 57%;
  height: auto;
  max-width: 400px;
  clip-path: ellipse(50% 50% at 50% 50%);
  float: right;
  margin: 0 0 0.5rem 0.5rem;
  @media (min-width: 768px) {
    width: 35%;
    margin: 0 0 3rem 3rem;
    margin-top: -5rem;
  }
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: small;
  @media (min-width: 768px) {
    font-size: medium;
  }
`;

const HighlightLink = styled(Link)`
  color: ${({ theme }) => theme.hihlightedText};
  text-decoration: none;
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AboutContainer theme={theme}>
      <Header />
      <FlexRow>
        <FlexItem>
          <h1>About me</h1>
          <Image src={profilePic} alt="Kimi J'adore" />
          <Text>
            Hello! <br /> I am a multi-talented lifestyle content creator who
            loves to have fun and engage with my audience. My areas of focus
            include fashion insights, beauty, skincare, and lifestyle vlogs. I
            enjoy sharing tips on piecing together trendy, modest clothing,
            reviewing skincare products, and creating realistic lifestyle vlogs.
          </Text>
          <Text>
            With my significant influence, I have inspired numerous followers to
            grab a camera and delve into content creation. As I continue my
            journey towards becoming a full-time content creator, my content is
            filled with motivation and advice for those looking to embark on a
            similar path. By being my authentic self, I provide inspiration for
            others, showing that no matter what you look like or what resources
            you have, you too can feel confident and empowered.
          </Text>
          <Text>
            I am interested in collaborating with brands that share a common
            mission and goal:{" "}
            <HighlightLink to="/about-me">
              To Engage With the world Inclusively and Meaningfully.
            </HighlightLink>
          </Text>
        </FlexItem>
      </FlexRow>
      <Stats />
      <PictureLayout pictureArray={aboutPics} />
    </AboutContainer>
  );
};

export default About;
