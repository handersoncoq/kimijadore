import React, { useEffect, useRef, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import MakeupPaintBrush from "../components/MakeupPaintBrush";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  margin-bottom: 5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-family: "Roboto";
  color: ${({ theme }) => theme.text};
  margin-top: ${({ theme }) => theme.homeH1MarginControl};
  margin-right: 0;
  margin-left: 0;
  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.p`
  font-size: larger;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const VideoContainer = styled.div`
  width: 40%;
  height: auto;
  background-color: transparent;
  border-radius: 50%;
  margin-top: ${({ theme }) => theme.homeVideoMarginControl};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.homeVideoBoxShadow};
  object-fit: cover;
`;

const HighlightLink = styled(Link)`
  color: ${({ theme }) => theme.hihlightedText};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  const videoRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      if (video) {
        video.play().catch((error) => {
          console.error("Video play was prevented:", error);
        });
      }
    };

    const handlePause = () => {
      if (video) {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handlePlay();
        } else {
          handlePause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (video) {
      observer.observe(video);

      video.onended = () => {
        video.pause();
      };
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [videoKey]);

  useEffect(() => {
    setVideoKey((prevKey) => prevKey + 1);
  }, [theme.videoSrc]);

  return (
    <HomeContainer theme={theme}>
      <MakeupPaintBrush />
      <VideoContainer>
        <StyledVideo key={videoKey} ref={videoRef} playsInline muted>
          <source src={theme.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </VideoContainer>
      <Title theme={theme}>Fashion | Skincare | Lifestyle</Title>
      <Subtitle theme={theme}>
        Explore my{" "}
        <HighlightLink to="/about-me">captivating journey</HighlightLink> and{" "}
        <HighlightLink to="/my-contents">stunning creations</HighlightLink>,
        brought to you by a passionate and talented micro-influencer.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
