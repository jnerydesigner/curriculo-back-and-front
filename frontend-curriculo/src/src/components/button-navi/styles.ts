import styled from "styled-components";

export const Container = styled.button`
  outline: 0;
  border: 0;
  width: 100%;
  height: 40px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8257e5;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;

  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  &:hover {
    background-color: #a29bfe;
    h4 {
      color: #34495e;
    }
    svg {
      color: #34495e;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    color: #fff;
  }
  h4 {
    text-align: center;

    color: #fff;
  }

  position: relative;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
