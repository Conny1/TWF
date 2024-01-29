import { useState } from "react";
import { styled } from "styled-components";
import { navLogoResponsive, mobileResponsive } from "../utils/resposive";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";

const Container = styled.div`
  /* outline: 1px solid red; */
  flex: 1;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${navLogoResponsive({
    width: "95%",
  })}
  ${mobileResponsive({
    justifyContent: "flex-end",
  })}

  button {
    border: none;
    outline: none;
    display: none;
    font-size: 30px;
    background-color: transparent;

    cursor: pointer;
    ${mobileResponsive({
      display: "block",
    })}
  }
`;
const LinkGroup = styled.div`
  max-width: 1000px;
  width: 70%;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 174px;
  ${navLogoResponsive({
    marginTop: "30px",
    width: "100%",
    height: "100px",
  })}
  ${mobileResponsive({
    display: "none",
  })}
`;
const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: slategrey;
  &:hover {
    color: #fbd92d;
  }
`;

const ResponsiveLinkgroup = styled.div`
  position: absolute;
  top: 67px;
  background-color: #fbd92dd1;
  width: 100%;
  outline: 1px solid gainsboro;
  display: none;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  height: 174px;

  ${mobileResponsive({
    display: "flex",
  })}
`;

const Nav = () => {
  const [resNav, setresNav] = useState(false);
  return (
    <Container>
      <LinkGroup>
        <Link href="#activities">Projects</Link>
        <Link href="#about">About</Link>
        {/* <Link>Donate</Link> */}
        <Link href="#contactus">Contact Us</Link>
        <Link>Login</Link>
      </LinkGroup>
      {resNav && (
        <ResponsiveLinkgroup className="scale-in-ver-top">
          <Link>Projects</Link>
          <Link>About</Link>
          {/* <Link>Donate</Link> */}
          <Link>Contact Us</Link>
          <Link>Login</Link>
        </ResponsiveLinkgroup>
      )}
      <button onClick={() => setresNav(!resNav)}>
        <GiHamburgerMenu />
      </button>
    </Container>
  );
};

export default Nav;
