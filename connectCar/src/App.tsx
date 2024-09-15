import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Header/Header";
import Rodape from "./components/Footer/Footer";
import { Body } from "./style/styled";

export default function App() {
  return (
    <div>
      <Body>
        <Cabecalho />
        <Outlet />
        <Rodape />
      </Body>
    </div>
  );
}
