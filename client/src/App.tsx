import { styled } from "styled-components";
import "./App.css";
import {
  Activities,
  ImageSlider,
  ContactUs,
  Executives,
  Nav,
} from "./components";
import logo from "./assets/logo.png";
import { mobileResponsive, navLogoResponsive } from "./utils/resposive";
import paralax from "./assets/paralax.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import val from "./assets/val.jpeg";
import emp from "./assets/emp.jpeg";
import ray from "./assets/ray.jpeg";
import geo from "./assets/geo.jpeg";
import bidan from "./assets/bidan.jpeg";
import fatma from "./assets/fatma.jpeg";
import conrad from "./assets/conrad.jpg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  scroll-behavior: smooth;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* outline: 1px solid yellow; */
  ${navLogoResponsive({
    flexDirection: "column",
    gap: "5px",
  })}

  img {
    align-self: flex-start;
    /* outline: 1px solid red; */
    height: 180px;
    object-fit: fill;
    position: fixed;

    ${navLogoResponsive({
      height: "60px",
      width: "60px",
    })}
  }
`;
const ParalaxIContainer = styled.div`
  width: 100%;
  background-image: url(${paralax});

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: end;
  ${navLogoResponsive({
    marginTop: "30px",
  })}
  h1 {
    width: 90%;
    font-weight: 500;
    font-size: 50px;
    margin-left: 30px;
    margin-top: 60px;
    color: #fff;
    ${mobileResponsive({
      fontSize: "30px",
    })}
  }
`;

const About = styled.div`
  width: 95%;
  max-width: 1000px;
  p {
    font-size: 20px;

    font-weight: 400;
  }
`;

const ActivityContainer = styled.div`
  width: 95%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  ${mobileResponsive({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

const ExecutivesContainer = styled.div`
  margin-top: 50px;
  width: 95%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  ${mobileResponsive({
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const Footer = styled.div`
  background-image: url(${paralax});

  /* Set a specific height */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
  height: 200px;
  width: 100%;
  display: flex;

  section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fbd92d78;
  }
  p {
    color: white;
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
const Socials = styled.div`
  width: 100px;
  font-size: 30px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

function App() {
  const [galery, setgalery] = useState(false);
  const executives = [
    {
      name: "Rayner Sakari",
      email: "delexxrayner@gmail.com",
      userpic: ray,
      seat: "Chair Person",
    },
    {
      name: "fatma mohsmed",
      email: "mfatma325@gmail.com",
      userpic: fatma,
      seat: "asst Chair Person",
    },
    {
      name: "valerian kagwa",
      email: "valeriakagwa@gmail.com",
      userpic: val,
      seat: "Head of finance",
    },
    {
      name: "Beden Rex ",
      email: "rexbedden@gmail.com",
      userpic: bidan,
      seat: "asst finance",
    },
    {
      name: "george kigos ",
      email: "kigosgeorge@gmail.com",
      userpic: geo,
      seat: "Program coordinater",
    },
    {
      name: "empiris scholastica ",
      email: "empirisscholastica@gmail.com",
      userpic: emp,
      seat: "asst Program coordinater",
    },
    {
      name: "Eng Conrad Mbuya ",
      email: "joelconrad277@gmail.com",
      userpic: conrad,
      seat: "asst Communication",
    },
  ];
  return (
    <Main>
      <NavContainer>
        <img src={logo} alt="logo" />
        <Nav />
      </NavContainer>

      <ParalaxIContainer>
        <h1>Tujivunie Wildlife Foundation</h1>
      </ParalaxIContainer>
      <About id="about">
        <h2
          style={{
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          About Us
        </h2>
        <p>
          The mission of Tujivunie Wildlife Foundation is to safeguard wildlife
          and their habitats, supporting biodiversity and environmental
          sustainability. We aim to create a balanced and thriving ecosystem,
          promoting a peaceful coexistence between people and the natural world
          for generations to come. We are a group of young individuals committed
          to wildlife conservation and biodiversity protection. You are invited
          to join us—every person's contribution matters. Let's work together as
          warriors for Sustainable Development Goals 15 and 13! 💪🏼
        </p>
        {/* <button>Read More</button> */}
      </About>

      <h2 style={{ fontSize: "30px", fontWeight: 500 }}>TWF Activities </h2>
      <ActivityContainer id="activities">
        <Activities setgalery={setgalery} />
      </ActivityContainer>
      {galery && <ImageSlider setgalery={setgalery} />}

      <ExecutivesContainer id="executives">
        {executives.map((item, i) => {
          return <Executives key={i} {...item} />;
        })}
      </ExecutivesContainer>
      <div style={{ width: "100%" }} id="contactus">
        <ContactUs />
      </div>

      <Footer>
        <section>
          <p>@{new Date().getFullYear()}rights reserved </p>
          <Socials>
            <a
              href="https://www.instagram.com/tw_foundation_?igsh=N2Vram9kdGJ1dzF2"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/_TWF_23?t=AiIuEdGNqWwtLOnBhTLwUA&s=09"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </Socials>
        </section>
      </Footer>
    </Main>
  );
}

export default App;
