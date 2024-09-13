import styled from "styled-components";

export const Header = styled.header`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100vw;

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
`;

export const Footer = styled.footer`
  background-color: #333;
`;
