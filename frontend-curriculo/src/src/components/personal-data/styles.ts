import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuPersonal = styled.ul`
  width: 70%;
  height: 100%;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6em;
  li {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    margin-right: 20px;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;

export const ContainerImg = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
