import { Container, MenuPersonal, ContainerImg } from "./styles";
import {
  PersonalIcon,
  GoogleIcon,
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
  PlaceIcon,
} from "../../images";
import { ImageComp } from "../image-comp";
import { TitleUser as TitleUserNew } from "../title-user";

export function PersonalData() {
  const data = {
    nome: "Jander da Costa Nery",
    email: "jander.webmaster@gmail.com",
    telefone: "9995319977",
    linkedin: "https://www.linkedin.com/in/jander-nery",
    github: "https://github.com/jnerydesigner",
    address: "Rua Aurora Barroso, 145 - Apto 02 - Adrianópils",
    estado: "Amazonas",
    cidade: "Manaus",
  };
  return (
    <Container>
      <MenuPersonal>
        <li>
          <ContainerImg>
            <ImageComp w="30px" h="30px" imgNode={PersonalIcon} />
          </ContainerImg>
          <TitleUserNew name={data.nome} fontSize="1.6em" color="#ffff" />
        </li>
        <li>
          <ContainerImg>
            <ImageComp w="30px" h="30px" imgNode={GoogleIcon} />
          </ContainerImg>
          <TitleUserNew name={data.email} fontSize="1em" color="#ffff" />
        </li>

        <li>
          <ContainerImg>
            <ImageComp w="30px" h="30px" imgNode={WhatsappIcon} />
          </ContainerImg>
          <TitleUserNew name={data.telefone} fontSize="1em" color="#ffff" />
        </li>

        <li>
          <ContainerImg>
            <ImageComp w="30px" h="30px" imgNode={LinkedinIcon} />
          </ContainerImg>
          <TitleUserNew name={data.linkedin} fontSize="1em" color="#ffff" />
        </li>

        <li>
          <ContainerImg>
            <ImageComp w="30px" h="30px" imgNode={GithubIcon} />
          </ContainerImg>
          <TitleUserNew name={data.github} fontSize="1em" color="#ffff" />
        </li>

        <li>
          <ContainerImg>
            <ImageComp w="30px" h="30px" imgNode={PlaceIcon} />
          </ContainerImg>
          <TitleUserNew
            name={`${data.address} - ${data.cidade} - ${data.estado}`}
            fontSize="0.8em"
            color="#ffff"
          />
        </li>
      </MenuPersonal>
    </Container>
  );
}

interface PropsTitleUser {
  userName: string;
}

function TitleUser(children: PropsTitleUser) {
  return <span>{children.userName}</span>;
}
