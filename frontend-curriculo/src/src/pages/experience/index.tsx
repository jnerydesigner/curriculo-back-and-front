import React, { useContext } from "react";

import { Container } from "./styles";
import { VariableContext } from "../../context/VariablesContext";

export const Experience: React.FC = () => {
  const { routeName, toggleRouteName } = useContext(VariableContext);
  return (
    <Container>
      <h3>Experience: {routeName}</h3>
    </Container>
  );
};
