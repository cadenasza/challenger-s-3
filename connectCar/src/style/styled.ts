import styled from "styled-components";

export const Header = styled.header`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 100vw;
  position: fixed;

  a {
    position: relative;
    text-decoration: none;
    color: whitesmoke;
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: whitesmoke;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    font-size: 2rem;
    transition: 0.3s;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .logo-team {
    display: flex;
  }

  .porto {
    display: flex;
    font-family: "Mansalva", sans-serif;
    font-size: 4rem;
    font-weight: 400;
    font-style: normal;
    text-shadow: 1px 1px 1px #000000;
  }

  #porto-porto {
    color: #2762ca;
  }

  #porto-seguro {
    color: whitesmoke;
  }

  .header-content-container {
    display: flex;
    gap: 3vw;
  }

  .menu-burguer {
    display: none;
  }

  @media (max-width: 1300px) {
    .header-content-container {
      display: none;
    }

    .header-content-container.open {
      display: flex;
      flex-direction: column;
      background-color: black;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }

    .menu-burguer {
      display: block;
      font-size: 4rem;
      color: whitesmoke;
      cursor: pointer;
    }
    .menu-burguer:hover {
      font-size: 5rem;
      color: gainsboro;
      transition: 0.3s;
    }
  }

  @media (max-width: 800px) {
    #porto-seguro {
      font-size: 3rem;
    }
  }
`;

export const Footer = styled.footer`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  background-color: #b7dff4;
  border-radius: 10px 10px 0 0;
  height: 20vh;
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  position: fixed;
  bottom: 0;

  .social-media {
    font-size: 1rem;
    display: flex;
    flex-direction: column;

    .social-media-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1vw;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
  a::before {
    background-color: black;
  }

  .logo-team {
    display: flex;
  }

  .endereco {
    width: 10vw;
    text-align: center;
    font-weight: 500;
  }

  .footer-content-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5%;
  }

  a:hover {
    font-size: 2.4rem;
    transition: 0.3s;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .copyright {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }

  .porto-text {
    display: flex;
    font-family: "Mansalva", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    font-style: normal;
  }

  @media (max-width: 997px) {
    .endereco {
      display: none;
    }

    .social-media {
      display: none;
    }

    .footer-content-container {
      width: 100%;
    }
  }
`;

export const HomeImagem = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#7fccf8d5, #000000a1),
    url("../../public/img/connectCar.png");
  color: whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    font-weight: 400;
    font-style: normal;
    font-family: "Mansalva", sans-serif;
    text-shadow: 1px 1px 1px #000000;
  }
  h2 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    text-shadow: 1px 1px 1px #000000;
  }

  @media (max-width: 800px) {
    #porto-seguro {
      font-size: 3rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

export const HomeDiagnosticarVeiculo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  height: 85vh;
  background: linear-gradient(#00000063, #66c7ff13), #40a9e4;
  color: whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-diagnosticar-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    align-items: center;
    padding: 0 40vw 0 0;
    justify-content: center;

    background-image: url("../../public/img/construction.png");
    background-repeat: no-repeat;
    background-clip: inherit;
    background-position: right;
    background-size: 30%;

    h1 {
      font-size: 5rem;
      font-weight: 400;
      font-style: normal;
    }
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 1300px) {
    .home-diagnosticar-container {
      width: 100%;
      padding: 0;

      background-image: url("../../public/img/construction.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;

      h1 {
        font-size: 3rem;
        text-shadow: 1px 1px 1px #000000;
      }
      h2 {
        font-size: 2rem;
        text-shadow: 1px 1px 1px #000000;
      }
    }
  }

  @media (max-width: 650px) {
    .home-diagnosticar-container {
      width: 100%;
      padding: 0;

      background-image: none;

      h1 {
        font-size: 1.5rem;
        text-shadow: 1px 1px 1px #000000;
      }
      h2 {
        font-size: 1rem;
        text-shadow: 1px 1px 1px #000000;
      }
    }
  }
`;

export const HomeSobreNos = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  width: 100vw;
  height: 85vh;
  background-image: linear-gradient(#00000063, #66c7ff13),
    url("../../public/img/we.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: whitesmoke;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    h1 {
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 0.1px;
      font-style: normal;
    }
  }
  p {
    width: 40%;
  }

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    div {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
    p {
      width: 90%;
    }
  }
`;

export const HomeSobreProjeto = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  width: 100vw;
  height: 85vh;
  background-image: linear-gradient(#00000063, #66c7ff13),
    url("../../public/img/we.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: whitesmoke;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    h1 {
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 0.1px;
      font-style: normal;
    }
  }
  p {
    width: 40%;
  }

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 800px) {
    div {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
    p {
      width: 90%;
    }
  }
`;


export const PagCadastrarVeiculo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  background-color: #f2f9ff;
  height: 100vh;
  width: 100vw;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #40a9e4;
    height: 92%;
    width: 95%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .arrow-left {
    <img src="../../public/img/arrow.png" alt="arrow"/>
    height: 40px;
  }
  
  .p-back {
    font-size: 2.3rem;
    font-weight: 500;
  }




`;
