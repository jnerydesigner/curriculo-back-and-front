import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 100vh;
  border-right: 2px solid #8257e5;
  background-color: #34334d;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d3436;
`;

export const MenuProfile = styled.div`
  width: 420px;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageProfile = styled.div`
  width: 420px;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h2 {
    margin-top: 20px;
    text-align: center;
  }
`;

export const ContainerImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #8257e5;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const MenuButtons = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 20px;
`;
