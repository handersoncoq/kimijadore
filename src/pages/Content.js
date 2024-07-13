import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import { contentPics } from "../components/Pictures";
import { contentVideos } from "../components/Videos";
import PictureLayout from "../components/PictureLayout";
import VideoLayout from "../components/VideoLayout";

const ContentContainer = styled.div`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: medium;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.brandName};
  margin: 1.5rem 0;
`;

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContentContainer theme={theme}>
      <Header />
      <Text>
        Check out my stunning creations below! These images and videos are from
        my TikTok and Instagram pages, capturing moments of creativity and
        passion. Dive in and enjoy the magic! Your feedback means the world to
        me.
      </Text>
      <h1>Videos</h1>
      <VideoLayout videoArray={contentVideos} />
      <StyledHr />
      <h1>Photos</h1>
      <PictureLayout pictureArray={contentPics} />
      <StyledHr />
    </ContentContainer>
  );
};

export default Content;
