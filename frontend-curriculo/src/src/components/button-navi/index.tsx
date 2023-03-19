import { IconBaseProps } from "react-icons";
import { Container, ContainerIcon } from "./styles";
import { HTMLProps } from "react";

interface PropsButton extends HTMLProps<HTMLButtonElement> {
  title: string;
  last?: boolean;
  first?: boolean;
  icon?: IconBaseProps;
  click?: () => void;
}

export function ButtonNavi({ title, icon, click }: PropsButton) {
  return (
    <Container onClick={click}>
      <ContainerIcon>
        <>{icon}</>
      </ContainerIcon>
      <h4>{title}</h4>
    </Container>
  );
}
