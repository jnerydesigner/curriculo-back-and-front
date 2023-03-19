import { Container, MenuPersonal, ContainerImg } from "./styles";
import { PersonalIcon, GoogleIcon, LinkedinIcon, GithubIcon, WhatsappIcon, PlaceIcon } from "../../images";
import { ImageComp } from "../image-comp";

export function PersonalData() {
  return (
    <Container>
      <MenuPersonal>
        <li>
          <ContainerImg><ImageComp w="30px" h="30px" imgNode={PersonalIcon} /></ContainerImg>
          <TitleUser userName="Jander da Costa Nery" />
        </li>
        <li>
        <ContainerImg><ImageComp w="30px" h="30px" imgNode={GoogleIcon} /></ContainerImg>
          <TitleUser userName="jander.webmaster@gmail.com" />
        </li>

        <li>
        <ContainerImg><ImageComp w="30px" h="30px" imgNode={LinkedinIcon} /></ContainerImg>
          <TitleUser userName="Jander da Costa Nery" />
        </li>

        <li>
        <ContainerImg><ImageComp w="30px" h="30px" imgNode={WhatsappIcon} /></ContainerImg>
          <TitleUser userName="Jander da Costa Nery" />
        </li>

        <li>
        <ContainerImg><ImageComp w="30px" h="30px" imgNode={GithubIcon} /></ContainerImg>
          <TitleUser userName="Jander da Costa Nery" />
        </li>

        <li>
        <ContainerImg><ImageComp w="30px" h="30px" imgNode={PlaceIcon} /></ContainerImg>
          <TitleUser userName="Jander da Costa Nery" />
        </li>

       
      </MenuPersonal>
    </Container>
  );
}

interface PropsTitleUser{
  userName: string;
}

function TitleUser(children: PropsTitleUser){
  return <span>{children.userName}</span>
}
