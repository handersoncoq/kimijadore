import React, { useEffect, useRef, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-family: "Roboto";
  color: ${({ theme }) => theme.text};
  margin-top: ${({ theme }) => theme.homeH1MarginControl};
  margin-right: 0;
  margin-left: 0;
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
  border-radius: 0.8em;
  margin-top: ${({ theme }) => theme.homeVideoMarginControl};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  border-radius: 0.8em;
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
