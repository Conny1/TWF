import React from "react";
import { styled } from "styled-components";
import { mobileResponsive } from "../utils/resposive";
import ac1 from "../assets/ac1.jpeg";

const Container = styled.div`
  width: 300px;
  ${mobileResponsive({
    width: "auto",
    flex: 1,
  })}
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
        <img src={ac1} alt="" />
      </Image>
      <Info>
        <section>
          <h3>Bring Back the Green In The Park</h3>
          <p
            style={{
              fontSize: "10px",
            }}
          >
            2nd Dec 2024
            {/* {new Date().toDateString()} */}
          </p>
        </section>

        <p>
          Engaged in tree planting activity and educational sessions on
          anti-poaching effectively addressing both environmental and wildlife
          conservation while preserving natural habitats.
        </p>
        <button onClick={() => setgalery(true)}>Galery</button>
      </Info>
    </Container>
  );
};

export default Activities;
