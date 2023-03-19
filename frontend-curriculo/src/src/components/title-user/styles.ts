import styled from "styled-components";

interface PropsTitle {
  fontSize: string;
  color: string;
}

export const ContainerTitle = styled.div<PropsTitle>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
