import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 80vw;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
  position: relative;
`;

export const Input = styled.input`
  :focus {
    outline: none;
  }
  width: 90%;
  border: 1px solid white;
  height: 50px;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  @media only screen and (max-width: 600px) {
    padding-left: 100px;
  }
`;

export const Line = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: #ffff00;
  height: 1px;
`;
