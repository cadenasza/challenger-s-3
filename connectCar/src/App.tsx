import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Header/Header";
import Rodape from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <div>
      {currentPath!== "/cadastro"?<Cabecalho />:null}
      <Outlet />
      {currentPath!=="/" && currentPath!== "/cadastro"?<Rodape />:null} 
    </div>
  );
}
