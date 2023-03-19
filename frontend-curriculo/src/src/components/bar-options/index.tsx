import React from "react";
import { Container, Title } from "./styles";
interface PropsBar{
  titleName: string
}

export function BarOptions(props: PropsBar){
  return (
    <Container>
      <Title>{props.titleName}</Title>
    </Container>
  );
};
