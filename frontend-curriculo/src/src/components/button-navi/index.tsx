import { IconBaseProps } from "react-icons";
import { Container, ContainerIcon } from "./styles";

import { MdHome } from "react-icons/md";

interface PropsButton {
  title: string;
  last?: boolean;
  first?: boolean;
  icon?: IconBaseProps;
}

export function ButtonNavi({ title, icon }: PropsButton) {
  return (
    <Container>
      <ContainerIcon>
        <>{icon}</>
      </ContainerIcon>
      <h4>{title}</h4>
    </Container>
  );
}
