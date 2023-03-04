import { GoogleIcon } from "../../images";
import {
  Container,
  ContainerLogin,
  ContainerTitle,
  LinkLogin,
  TextLogin,
} from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <h2>Perfil</h2>
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
