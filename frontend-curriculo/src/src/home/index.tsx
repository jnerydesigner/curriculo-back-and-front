import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Container, ContainerGeral, ContainerNavbar } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <ContainerNavbar>
        <Navbar />
      </ContainerNavbar>
      <ContainerGeral>
        <Header />
        <Content />
        <Footer />
      </ContainerGeral>
    </Container>
  );
};
