import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

const ContactContainer = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Text = styled.p`
  font-family: "Roboto";
  font-size: medium;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContactContainer theme={theme}>
      <Header />
      <Text>
        You can reach out to me for collaborations or provide any feedback you
        may have. Please provide your name, email, and message, and I will get
        back to you promptly.
      </Text>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
