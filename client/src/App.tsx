import { styled } from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import logo from "./assets/logo.png";
import { navLogoResponsive } from "./utils/resposive";
import paralax from "./assets/paralax.jpeg";

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
  outline: 1px solid yellow;
  ${navLogoResponsive({
    flexDirection: "column",
    gap: "5px",
  })}

  img {
    align-self: flex-start;
    outline: 1px solid red;
    height: 180px;
    object-fit: fill;

    ${navLogoResponsive({
      height: "60px",
      width: "60px",
    })}
  }
`;
const ParalaxIContainer = styled.div`
  width: 100%;

  ${navLogoResponsive({
    marginTop: "30px",
  })}
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
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

function App() {
  return (
    <Main>
      <NavContainer>
        <img src={logo} alt="logo" />
        <Nav />
      </NavContainer>

      <ParalaxIContainer>
        <img src={paralax} alt="" />
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
    </Main>
  );
}

export default App;
