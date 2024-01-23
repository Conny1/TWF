import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserInfo = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
  button {
    background-color: #fbd92d;
    padding: 5px;
    font-size: 500;
    margin: 50px;
    border: none;
    width: 200px;
    cursor: pointer;
  }
`;
const Image = styled.div`
  width: fit-content;
  height: 200px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 100px;
  }
`;

const Executives = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://media.istockphoto.com/id/170625026/photo/giraffe-against-city-skyline.jpg?s=1024x1024&w=is&k=20&c=DcJCyuOGMMKYgAc1dWkwpHQcvbsj5RhuzVBPkBkPMJ8="
          alt=""
        />
      </Image>
      <UserInfo>
        <p
          style={{
            fontSize: "12px",
            color: "GrayText",
          }}
        >
          HEAD OF REGIONAL HUBS
        </p>

        <p
          style={{
            width: "200px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Conrad Mbuya
        </p>
        <p>user@gmail.com</p>

        <button>Get Intouch</button>
      </UserInfo>
    </Container>
  );
};

export default Executives;
