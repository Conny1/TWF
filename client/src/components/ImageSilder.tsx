import React, { useState } from "react";

import styled from "styled-components";
import { mobileResponsive } from "../utils/resposive";

// Styled components
const SliderContainer = styled.div`
  outline: 1px solid red;
  padding: 3px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background-color: #fbd92d55;
  ${mobileResponsive({
    position: "fixed",
    top: "50%",
    height: "500px",
  })}
  section {
    width: 80%;
    height: 100%;
    ${mobileResponsive({
      width: "98%",
    })}
  }
  button {
    height: fit-content;
    font-size: 20px;
    padding: 10px;
    background-color: #fbd92d;
    border: none;
    cursor: pointer;
    ${mobileResponsive({
      position: "absolute",
    })}
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
type Props = {
  setgalery: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageSlider = ({ setgalery }: Props) => {
  const [count, setcount] = useState(0);

  // Replace these placeholder image URLs with your own image URLs
  const images = [
    "https://placekitten.com/800/400",
    "https://placekitten.com/800/404",
    "https://placekitten.com/800/401",

    // Add more image URLs as needed
  ];

  const Increment = () => {
    if (count === images.length - 1) {
      return setcount(images.length - 1);
    }
    setcount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return setcount(0);
    }
    setcount((prev) => prev - 1);
  };

  return (
    <SliderContainer>
      <button
        onClick={() => setgalery(false)}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        close
      </button>
      <button
        style={{
          left: 0,
        }}
        onClick={decrement}
      >
        {" "}
        prev
      </button>
      <section>
        <img src={images[count]} alt="" />
      </section>
      <button
        style={{
          right: 0,
        }}
        onClick={Increment}
      >
        next
      </button>
    </SliderContainer>
  );
};

export default ImageSlider;
