import { ContainerTitle } from "./styles";

interface TitleProps {
  name: string;
  fontSize: string;
  color: string;
}

export function TitleUser({ name, fontSize, color }: TitleProps) {
  return (
    <ContainerTitle fontSize={fontSize} color={color}>
      {name}
    </ContainerTitle>
  );
}
