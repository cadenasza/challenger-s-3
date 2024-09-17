import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home/index.tsx";
import NotFound from "./routes/NotFound/index.tsx";
import DiagnosticarVeiculo from "./routes/DiagnosticarVeiculo/index.tsx";
import SobreNos from "./routes/SobreNos/index.tsx";
import SobreProjeto from "./routes/SobreProjeto/index.tsx";
import SelecionarOpcaoCadastro from "./routes/SelecionarOpcaoCadastro/index.tsx";
import EntrarConta from "./routes/EntrarConta/index.tsx";
import CadastrarCliente from "./routes/CadastrarCliente/index.tsx";
import CriarContas from "./routes/CriarConta/index.tsx";
import CadastroVeiculo from "./routes/CadastroVeiculo/index.tsx";
import CadastrarMecanico from "./routes/CadastrarMecanico/index.tsx";
import EsqueceuSenha from "./routes/EsqueceuSenha/index.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/diagnosticar/veiculo", element: <DiagnosticarVeiculo /> },
      { path: "/nos", element: <SobreNos /> },
      { path: "/projeto", element: <SobreProjeto /> },
      { path: "/cadastro", element: <SelecionarOpcaoCadastro /> },
      { path: "/entrar", element: <EntrarConta /> },
      { path: "/cadastro/cliente", element: <CadastrarCliente /> },
      { path: "/criar", element: <CriarContas/> },
      { path: "/cadastro/veiculo", element: <CadastroVeiculo/> },
      { path: "/cadastro/mecanico", element: <CadastrarMecanico/> },
      { path: "/esqueceu/Senha", element: <EsqueceuSenha/> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
