import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
    </NotFoundContainer>
  );
};

export default NotFound;
