import React, { useState, useContext } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context/ThemeContext";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 7px;
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: medium;
  font-family: "BlinkMacSystemFont";
  color: #333;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.background};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: medium;
  font-family: "BlinkMacSystemFont";
  color: #333;
  height: 150px;
  &:focus {
    outline: none;
    border-bottom: 4px solid ${({ theme }) => theme.background};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #000000;
  color: #ffc0cb;
  border-radius: 7px;
  border-top: 1px solid #ffc0cb;
  border-bottom: 1px solid #ffc0cb;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: medium;
  z-index: 1001;

  &:hover {
    cursor: pointer;
    color: #ffc0cb;
  }
`;

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  const SERVICE_ID = "service_4540s9b";
  const TEMPLATE_ID = "template_r9cu2m2";
  const PUBLIC_KEY = "89sTsVJnR0IZQ6yCi";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields then submit again");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <FormContainer theme={theme}>
      <Form onSubmit={handleSubmit}>
        <Title>Contact Me</Title>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
