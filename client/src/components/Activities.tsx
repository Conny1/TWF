import React, { useState } from "react";
import { styled } from "styled-components";
import ImageSlider from "./ImageSilder";

const Container = styled.div`
  width: 300px;
`;
const Info = styled.div`
  padding: 10px;
  button {
    background-color: #fbd92d;
    padding: 5px;
    font-size: 500;

    border: none;
    width: 80%;
    cursor: pointer;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type Props = {
  setgalery: React.Dispatch<React.SetStateAction<boolean>>;
};

const Activities = ({ setgalery }: Props) => {
  return (
    <Container>
      <Image>
        <img
          src="https://media.istockphoto.com/id/170625026/photo/giraffe-against-city-skyline.jpg?s=1024x1024&w=is&k=20&c=DcJCyuOGMMKYgAc1dWkwpHQcvbsj5RhuzVBPkBkPMJ8="
          alt=""
        />
      </Image>
      <Info>
        <section>
          <h3>Title</h3>
          <p
            style={{
              fontSize: "10px",
            }}
          >
            {new Date().toDateString()}
          </p>
        </section>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nemo
          est
        </p>
        <button onClick={() => setgalery(true)}>Galery</button>
      </Info>
    </Container>
  );
};

export default Activities;
