import { Container } from "./styles";
import { PersonalIcon } from "../../images";
import React, { FC, ReactNode } from "react";



interface PropsImage{
    mr?: string,
    ml?: string,

    w: string;
    h: string;
    imgNode? : string
}
export function ImageComp({h, w, imgNode}: PropsImage) {
  return (
    <Container w={w} h={h}>        
      <img src={imgNode} alt="personal" />
    </Container>
  );
}
