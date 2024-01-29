import { styled } from "styled-components";
import { mobileResponsive } from "../utils/resposive";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobileResponsive({
    width: "100%",
    flex: 1,
  })}
`;
const UserInfo = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobileResponsive({
    padding: "5px",
  })}
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
    ${mobileResponsive({
      width: "80%",
    })}
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
type Props = {
  name: string;
  email: string;
  userpic: string;
  seat: string;
};

const Executives = ({ name, email, userpic, seat }: Props) => {
  return (
    <Container>
      <Image>
        <img src={userpic} alt="" />
      </Image>
      <UserInfo>
        <p
          style={{
            fontSize: "12px",
            color: "GrayText",
            textTransform: "uppercase",
          }}
        >
          {seat}
        </p>

        <p
          style={{
            width: "200px",
            fontSize: "20px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {name}
        </p>
        <p>{email}</p>

        {/* <button>Get Intouch</button> */}
      </UserInfo>
    </Container>
  );
};

export default Executives;
