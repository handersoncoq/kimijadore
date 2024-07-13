import React, { useContext } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
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

const LazyImage = styled.img`
  width: 57%;
  height: auto;
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  border-radius: 50%;
  float: right;
  margin: 0 0 0.5rem 0.5rem;
  transform: translateY(${({ $inView }) => ($inView ? "0" : "20px")});
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
  @media (min-width: 768px) {
    width: 35%;
    margin: 0 0 3rem 3rem;
    margin-top: -5rem;
  }
`;

const LazyText = styled.p`
  font-size: small;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
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

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef1, inView: textInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef2, inView: textInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef3, inView: textInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutContainer theme={theme}>
      <Header />
      <FlexRow>
        <FlexItem>
          <h1>About me</h1>
          <div ref={imageRef}>
            <LazyImage
              src={profilePic}
              alt="Kimi J'adore"
              $inView={imageInView}
            />
          </div>
          <div ref={textRef1}>
            <LazyText $inView={textInView1}>
              Hello! <br /> I am a multi-talented lifestyle content creator who
              loves to have fun and engage with my audience. My areas of focus
              include fashion insights, beauty, skincare, and lifestyle vlogs. I
              enjoy sharing tips on piecing together trendy, modest clothing,
              reviewing skincare products, and creating realistic lifestyle
              vlogs.
            </LazyText>
          </div>
          <div ref={textRef2}>
            <LazyText $inView={textInView2}>
              With my significant influence, I have inspired numerous followers
              to grab a camera and delve into content creation. As I continue my
              journey towards becoming a full-time content creator, my content
              is filled with motivation and advice for those looking to embark
              on a similar path. By being my authentic self, I provide
              inspiration for others, showing that no matter what you look like
              or what resources you have, you too can feel confident and
              empowered.
            </LazyText>
          </div>
          <div ref={textRef3}>
            <LazyText $inView={textInView3}>
              I am interested in collaborating with brands that share a common
              mission and goal:{" "}
              <HighlightLink to="/about-me">
                to Engage with the World Inclusively and Meaningfully.
              </HighlightLink>
            </LazyText>
          </div>
        </FlexItem>
      </FlexRow>
      <Stats />
      <PictureLayout pictureArray={aboutPics} />
    </AboutContainer>
  );
};

export default About;
