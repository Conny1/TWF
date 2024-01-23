import { styled } from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import logo from "./assets/logo.png";
import { navLogoResponsive } from "./utils/resposive";
import paralax from "./assets/paralax.jpeg";
import Activities from "./components/Activities";
import Executives from "./components/Executives";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
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
  }
`;

const About = styled.div`
  width: 95%;
  max-width: 1000px;
  p {
    font-size: 18px;
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
`;

const ExecutivesContainer = styled.div`
  margin-top: 50px;
  width: 95%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
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
  return (
    <Main>
      <NavContainer>
        <img src={logo} alt="logo" />
        <Nav />
      </NavContainer>

      <ParalaxIContainer>
        <h1>Tujivunie Wildlife Foundation</h1>
      </ParalaxIContainer>
      <About>
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
        <button>Read More</button>
      </About>

      <h2 style={{ fontSize: "30px", fontWeight: 500 }}>TWF Activities </h2>
      <ActivityContainer>
        <Activities />
        <Activities />
        <Activities />
        <Activities />
      </ActivityContainer>
      <ExecutivesContainer>
        <Executives />
        <Executives />
        <Executives />
        <Executives />
      </ExecutivesContainer>

      <Footer>
        <section>
          <p>{new Date().getFullYear()}rights reserved </p>
          <Socials>
            <FaInstagram />
            <FaXTwitter />
          </Socials>

          <button>Contact Us</button>
        </section>
      </Footer>
    </Main>
  );
}

export default App;
