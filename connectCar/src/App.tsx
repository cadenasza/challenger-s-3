import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Header/Header";
import Rodape from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <div>
      {currentPath!== "/cadastro" && currentPath!== "/entrar" && currentPath!== "/cadastro/cliente" && currentPath!== "/criar" && currentPath!== "/cadastro/veiculo" && currentPath!== "/cadastro/mecanico" && currentPath!== "/integrantes"  && currentPath!== "/esqueceu/senha"?<Cabecalho />:null}
      <Outlet />
      {currentPath!=="/" && currentPath!== "/cadastro" && currentPath!== "/entrar" && currentPath!== "/cadastro/cliente" && currentPath!== "/criar" && currentPath!== "/cadastro/veiculo" && currentPath!== "/cadastro/mecanico" && currentPath!== "/esqueceu/senha" && currentPath!== "/integrantes"?<Rodape />:null} 
    </div>
  );
}
