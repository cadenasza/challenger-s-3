import { Link } from 'react-router-dom';
import { Header } from '../../style/styled';
import { IoPerson } from "react-icons/io5";


export default function Cabecalho() {
  return (
    <Header>
      <div className="logo-team">
        <p className="porto" id="porto-seguro">ConectCar</p>
      </div>
      <div className="header-content-container">
        <Link to="/"><p>Home</p></Link>
        <Link to="/diagnosticar/veiculo"><p>Diagnosticar Veículo</p></Link>
        <Link to="/nos"><p>Sobre Nós</p></Link>
        <Link to="/projeto"><p>Sobre o Projeto</p></Link>
        <Link to="/login"><IoPerson /></Link>
      </div>
    </Header>
  );
}
