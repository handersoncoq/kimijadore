import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";

const AboutContainer = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: medium;
  margin-top: 3em;
  padding: 0 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.2rem;
  padding: 1rem 0;
`;

const EmbedContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 1px 18px 9px rgba(0, 0, 0, 0.1);

  blockquote {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullScreenEmbed = styled.div`
  width: 80%;
  height: 80%;
  background: #fff;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

const TikTokEmbed = ({ videoId, onClick }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => {
      const embedElement = document.querySelector(
        `blockquote[data-video-id="${videoId}"]`
      );
      if (!embedElement) {
        setError(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoId]);

  return (
    <EmbedContainer onClick={() => onClick(videoId)}>
      {!error ? (
        <blockquote
          className="tiktok-embed"
          cite={`https://www.tiktok.com/@kimichella25/video/${videoId}`}
          data-video-id={videoId}
        >
          <section></section>
        </blockquote>
      ) : (
        <ErrorMessage>
          Failed to load TikTok video with ID: {videoId}
        </ErrorMessage>
      )}
    </EmbedContainer>
  );
};

const tiktokVideoIds = [
  "7387090557442559274",
  "7371588117972782378",
  "7376002290328685870",
  "7248788031971298602",
  "7348429766627822890",
  "7377509077263437098",
  "7384123877774888234",
  "7366758899396906282",
  "7381894713105960238",
];

const Contents = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (selectedVideo) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [selectedVideo]);

  return (
    <AboutContainer theme={theme}>
      <Header />
      <Text>
        Check out my stunning creations below! These images and videos are from
        my TikTok and Instagram pages, capturing moments of creativity and
        passion. Dive in and enjoy the magic! Your feedback means the world to
        me.
      </Text>
      <GridContainer>
        {tiktokVideoIds.map((videoId, index) => (
          <TikTokEmbed
            key={index}
            videoId={videoId}
            onClick={handleVideoClick}
          />
        ))}
      </GridContainer>
      {selectedVideo && (
        <FullScreenContainer onClick={handleClose}>
          <FullScreenEmbed>
            <blockquote
              className="tiktok-embed"
              cite={`https://www.tiktok.com/@kimichella25/video/${selectedVideo}`}
              data-video-id={selectedVideo}
              style={{ width: "100%", height: "100%", margin: 0 }}
            >
              <section></section>
            </blockquote>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
          </FullScreenEmbed>
        </FullScreenContainer>
      )}
    </AboutContainer>
  );
};

export default Contents;
