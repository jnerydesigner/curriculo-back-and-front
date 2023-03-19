import styled from "styled-components";

interface PropsImage{
  w: string;
  h: string;
}

export const Container = styled.div<PropsImage>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  img{
    width: 100%;
    height: 100%;
  }
`;


