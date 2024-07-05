import React from "react";
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
`;

const PictureLayout = ({ pictureArray }) => {
  return (
    <GridContainer>
      {pictureArray.map((picture, index) => (
        <PictureItem key={index} src={picture} alt={`Picture ${index + 1}`} />
      ))}
    </GridContainer>
  );
};

export default PictureLayout;
