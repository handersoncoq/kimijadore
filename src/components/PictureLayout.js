import React, { useState } from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding: 1rem 0;
`;

const PictureItem = styled.img`
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

const FullScreenImage = styled.img`
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

const CloseButton = styled(ControlButton)`
  top: 1rem;
  right: 1rem;
  transform: none;
`;

const PictureLayout = ({ pictureArray }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullScreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictureArray.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictureArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <GridContainer>
        {pictureArray.map((picture, index) => (
          <PictureItem
            key={index}
            src={picture}
            alt={`Picture ${index + 1}`}
            onClick={() => openFullScreen(index)}
          />
        ))}
      </GridContainer>
      {isFullScreen && (
        <FullScreenBackdrop onClick={closeFullScreen}>
          <CloseButton onClick={closeFullScreen}>&times;</CloseButton>
          <PrevButton
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </PrevButton>
          <NextButton
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &#10095;
          </NextButton>
          <FullScreenImage
            src={pictureArray[currentIndex]}
            alt={`Picture ${currentIndex + 1}`}
          />
        </FullScreenBackdrop>
      )}
    </>
  );
};

export default PictureLayout;
