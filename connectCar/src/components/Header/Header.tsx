import { Link } from "react-router-dom";
import { Header } from "../../style/styled";
import { IoPerson } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Cabecalho() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <div className="logo-team">
        <p className="porto" id="porto-seguro">
          ConectCar
        </p>
      </div>
      <IoIosMenu onClick={() => setIsOpen(!isOpen)} className="menu-burguer"/>
      <div className={`header-content-container ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          <p>Home</p>
        </Link>
        <Link to="/diagnosticar/veiculo" onClick={closeMenu}>
          <p>Diagnosticar Veículo</p>
        </Link>
        <Link to="/nos" onClick={closeMenu}>
          <p>Sobre Nós</p>
        </Link>
        <Link to="/projeto" onClick={closeMenu}>
          <p>Sobre o Projeto</p>
        </Link>
        <Link to="/entrar" onClick={closeMenu}>
          <p>
            <IoPerson />
          </p>
        </Link>
      </div>
    </Header>
  );
}