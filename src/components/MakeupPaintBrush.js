import React from "react";
import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const MakeupBrushContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 40px;
  height: 250px;
  margin-top: -7em;
  margin-left: -16em;
  rotate: -35deg;
  animation: ${slideDown} 1s ease-out;
`;

const BrushHead = styled.div`
  width: 21px;
  height: 27px;
  background-color: #f7e4d5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: solid #8b5e3c 1px;
`;

const BrushFerrule = styled.div`
  width: 22px;
  height: 15px;
  background-color: #ceccca;
  margin-bottom: -5px;
  border-radius: 0 0 15px 15px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const BrushHandle = styled.div`
  width: 8px;
  height: 110px;
  background-color: #8b5e3c;
  margin-bottom: -5px;
  border-radius: 10px;
`;

const MakeupPaintBrush = () => {
  return (
    <MakeupBrushContainer>
      <BrushHead />
      <BrushFerrule />
      <BrushHandle />
    </MakeupBrushContainer>
  );
};

export default MakeupPaintBrush;
