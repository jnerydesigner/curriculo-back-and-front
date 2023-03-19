import { Container } from "./styles";
import v from '../../../../package.json'

export const Footer: React.FC = () => {
  return (
    <Container>
      <h2>Site Criado por Jander Nery @copyright - 2023</h2>
      <h3>version: {v.version}</h3>
    </Container>
  );
};
