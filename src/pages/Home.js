import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    height: 75vh;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-top: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0;
`;

const VideoContainer = styled.div`
  width: 40%;
  height: auto;
  background-color: none;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  background-color: none;
  object-fit: cover;
  @supports (-webkit-touch-callout: none) {
    filter: brightness(1.02) contrast(1.05);
  }
`;

const HighlightLink = styled(Link)`
  color: darkred;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  const videoRef = useRef(null);

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
  }, []);

  return (
    <HomeContainer>
      <VideoContainer>
        <StyledVideo ref={videoRef} playsInline muted>
          <source
            src={`${process.env.PUBLIC_URL}/media2.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </StyledVideo>
      </VideoContainer>
      <Title>Welcome to Kimi J'adore's Avenue</Title>
      <Subtitle>
        Explore my{" "}
        <HighlightLink to="/about-me">captivating journey</HighlightLink> and{" "}
        <HighlightLink to="/my-contents">stunning creations</HighlightLink>,
        brought to you by a passionate and talented micro-influencer.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
