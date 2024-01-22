import React from "react";
import { styled } from "styled-components";
import { navLogoResponsive } from "../utils/resposive";

const Container = styled.div`
  outline: 1px solid red;
  flex: 1;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${navLogoResponsive({
    width: "95%",
  })}
`;
const LinkGroup = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #fbd92d;
  }
`;

const Nav = () => {
  return (
    <Container>
      <LinkGroup>
        <Link>Projects</Link>
        <Link>About</Link>
        <Link>Donate</Link>
        <Link>Contact Us</Link>
        <Link>Login</Link>
      </LinkGroup>
    </Container>
  );
};

export default Nav;
