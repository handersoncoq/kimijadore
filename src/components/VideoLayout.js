import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 1rem 0;
`;

const VideoItem = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 1px 18px 9px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const FullScreenBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullScreenVideo = styled.video`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 1px 18px 9px rgba(0, 0, 0, 0.1);
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: lightgray;
  }
`;

const PrevButton = styled(ControlButton)`
  left: 1rem;
`;

const NextButton = styled(ControlButton)`
  right: 1rem;
`;

const CloseButton = styled(FaTimes)`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 1.7rem;
  height: 1.7rem;
  color: white;
  cursor: pointer;
  z-index: 1001;
`;

const GoToContentLink = styled.a`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: #000000;
  color: white;
  border-radius: 4px;
  border-top: 1px solid #ffc0cb;
  border-bottom: 1px solid #ffc0cb;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 0.9rem;
  z-index: 1001;

  &:hover {
    cursor: pointer;
    color: #ffc0cb;
  }
`;

const VideoLayout = ({ videoArray }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullScreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoArray.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === videoArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <GridContainer>
        {videoArray.map((video, index) => (
          <VideoItem
            key={index}
            src={`${video.videoUrl}#t=0.001`}
            muted
            preload="metadata"
            onClick={() => openFullScreen(index)}
          />
        ))}
      </GridContainer>
      {isFullScreen && (
        <FullScreenBackdrop onClick={closeFullScreen}>
          <CloseButton onClick={closeFullScreen} />
          <PrevButton onClick={showPrev}>&#10094;</PrevButton>
          <NextButton onClick={showNext}>&#10095;</NextButton>
          <GoToContentLink
            href={videoArray[currentIndex].contentLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Go to content
          </GoToContentLink>
          <FullScreenVideo
            src={videoArray[currentIndex].videoUrl}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            muted={false}
          />
        </FullScreenBackdrop>
      )}
    </>
  );
};

export default VideoLayout;
