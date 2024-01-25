import { useState } from "react";
import styled from "styled-components";

// Styled components
const ContactUsContainer = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #fbd92d;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
`;

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your submission logic here

    console.log("Email:", email);
    console.log("Message:", message);
    // You can add your submission logic (e.g., API call) here
  };

  return (
    <ContactUsContainer>
      <h2>Reach Us</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <TextArea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactUsContainer>
  );
};

export default ContactUs;
