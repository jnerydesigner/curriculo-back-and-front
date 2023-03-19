import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 2px solid #8257e5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ContainerTitle = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;


// to-do
export const LinkLogin = styled.a`
  background-color: transparent;
  display: block;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    background-color: #737475;
    span {
      color: #000;
    }
  }
`;

export const TextLogin = styled.span`
  margin-left: 20px;
  color: #6c5ce7;
`;
