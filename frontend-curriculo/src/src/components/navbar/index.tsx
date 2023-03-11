import {
  Container,
  ImageProfile,
  MenuProfile,
  ContainerImg,
  MenuButtons,
} from "./styles";
import { ButtonNavi } from "../button-navi";
import { Angelina } from "../../images";
import {
  MdHome,
  MdOutlineVerifiedUser,
  MdOutlineHandshake,
  MdOutlineArticle,
} from "react-icons/md";
import { HiOutlineCalculator } from "react-icons/hi";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { VariableContext } from "../../context/VariablesContext";
import { createPageName } from "../../utils/CreatePageName";

export const Navbar: React.FC = () => {
  const { routeName, toggleRouteName } = useContext(VariableContext);
  const navigate = useNavigate();
  function handleClickNavigator(page: string): void | undefined {
    toggleRouteName(createPageName(page));
    navigate(page);
  }
  return (
    <Container>
      <ImageProfile>
        <ContainerImg>
          <img src={Angelina} alt="angelina jolie" />
        </ContainerImg>
        <h2>Currículo</h2>
        <h3>Desenvolvedor de Back End</h3>
        <h3>Jander da Costa Nery</h3>
      </ImageProfile>

      <MenuProfile>
        <MenuButtons>
          <ButtonNavi
            title="Perfil"
            icon={<MdHome />}
            click={() => handleClickNavigator("/")}
          />
          <ButtonNavi
            click={() => handleClickNavigator("experience")}
            title="Experiência"
            icon={<MdOutlineVerifiedUser />}
          />
          <ButtonNavi
            click={() => handleClickNavigator("stage")}
            title="Estágios"
            icon={<MdOutlineHandshake />}
          />
          <ButtonNavi
            click={() => handleClickNavigator("formation")}
            title="Formação"
            icon={<HiOutlineCalculator />}
          />
          <ButtonNavi
            click={() => handleClickNavigator("portfolio")}
            title="Portifolio"
            icon={<MdOutlineArticle />}
          />
        </MenuButtons>

        <div>
          <div>
            <p>Redes Sociais</p>
          </div>
        </div>
      </MenuProfile>
    </Container>
  );
};
