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

export const Navbar: React.FC = () => {
  return (
    <Container>
      <ImageProfile>
        <ContainerImg>
          <img src={Angelina} alt="angelina jolie" />
        </ContainerImg>
        <h2>Currículo</h2>
        <h3>Desenvolvedor de Back End</h3>
      </ImageProfile>

      <MenuProfile>
        <MenuButtons>
          <ButtonNavi title="Perfil" icon={<MdHome />} />
          <ButtonNavi title="Experiência" icon={<MdOutlineVerifiedUser />} />
          <ButtonNavi title="Estágios" icon={<MdOutlineHandshake />} />
          <ButtonNavi title="Formação" icon={<HiOutlineCalculator />} />
          <ButtonNavi title="Portifolio" icon={<MdOutlineArticle />} />
        </MenuButtons>
      </MenuProfile>
    </Container>
  );
};
