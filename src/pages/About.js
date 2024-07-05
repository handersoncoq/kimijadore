import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import profilePic from "../assets/media/pictures/mirror_selfie.png";
import { aboutPics } from "../components/Pictures";
import Stats from "../components/Stats";
import PictureLayout from "../components/PictureLayout";
import Header from "../components/Header";

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
  padding: 0 1rem;
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
  font-size: x-small;
  @media (min-width: 768px) {
    font-size: medium;
  }
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
            loves to have fun and engage with their audience. My areas of focus
            are fashion insights, beauty, skincare and lifestyle vlogs. As I
            love sharing with people how to piece together trendy clothing that
            are modest. Skin care products and realistically lifestyle vlogs.
          </Text>
          <Text>
            With my significant influence, I have inspired numerous followers to
            grab a camera and delve into content creation. As I continue my
            journey towards becoming a full time content creator, my content is
            with motivation and advice for those looking to embark on a similar
            path. Being my authentic self provides inspiration for others, and I
            show that no matter what you look like or have access to. you too
            can feel all that you are.
          </Text>
          <Text>
            I am interested in brands that share a common mission and goal, and
            that is to share and engage with the world inclusively.
          </Text>
        </FlexItem>
      </FlexRow>
      <Stats />
      <PictureLayout pictureArray={aboutPics} />
    </AboutContainer>
  );
};

export default About;
