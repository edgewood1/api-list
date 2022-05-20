import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  justify-content: start;
  width: 70vw;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

export const Img = styled.img`
  transform: scale(2);
  border: 1px solid black;
  border-radius: 55%;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    transform: scale(1.1);
    margin: 10px;
  }
`;
