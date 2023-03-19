import React from "react";

import { Container } from "./styles";
import { BarOptions } from "../../components/bar-options";
import { Content } from "../../components/content";

export const Profile: React.FC = () => {
  return (
    <Container>
      <BarOptions titleName="Dados Pessoais" />
      <Content />
    </Container>
  );
};
