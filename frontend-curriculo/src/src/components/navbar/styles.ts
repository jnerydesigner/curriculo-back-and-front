import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 100vh;
  border-right: 2px solid #8257e5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuProfile = styled.div`
  width: 420px;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageProfile = styled.div`
  width: 460px;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h2 {
    margin-top: 20px;
    text-align: center;
  }
`;

export const ContainerImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;
  ::before{
    content: '';
    position: absolute;
    inset: -10px 80px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0.5s;
    animation: animate 4s linear infinite;
    filter: blur(4px)
  }

  ::after{
    content: '';
    position: absolute;
    inset: 4px;
    background: #34334D;
    border-radius: 50%;
    z-index: 1;
  }

  @keyframes animate {
    0% 
    {
      transform: rotate(0deg);
    }
    0% 
    {
      transform: rotate(360deg);
    }
  }
  :hover::before{
    inset: -10px 10px;
  }


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 97%;
    height: 97%;
    border-radius: 50%;
    z-index: 10;
  }
`;

export const MenuButtons = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 20px;
`;
export const ContainerSocialMedias = styled.div`
  width: 100%;
  height: 100%;
`;
