import { useContext } from "react";
import { GoogleIcon } from "../../images";
import {
  Container,
  ContainerLogin,
  ContainerTitle,
  LinkLogin,
  TextLogin,
} from "./styles";
import { VariableContext } from "../../context/VariablesContext";

export const Header: React.FC = () => {
  const { routeName, toggleRouteName } = useContext(VariableContext);
  return (
    <Container>
      <ContainerTitle>
        <h2>{routeName}</h2>
      </ContainerTitle>
      <ContainerLogin>
        <LinkLogin>
          <img src={GoogleIcon} alt="google icon" />
          <TextLogin>Logar com Google</TextLogin>
        </LinkLogin>
      </ContainerLogin>
    </Container>
  );
};
