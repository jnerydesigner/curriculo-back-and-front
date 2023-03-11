import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Container, ContainerGeral, ContainerNavbar } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../pages/profile";
import { Experience } from "../pages/experience";
import { Stage } from "../pages/stage";
import { Formation } from "../pages/formation";
import { Portfolio } from "../pages/portfolio";

export const Home: React.FC = () => {
  return (
    <Container>
      <ContainerNavbar>
        <Navbar />
      </ContainerNavbar>
      <ContainerGeral>
        <Header />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </ContainerGeral>
    </Container>
  );
};
