import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home/index.tsx";
import NotFound from "./routes/NotFound/index.tsx";
import DiagnosticarVeiculo from "./routes/DiagnosticarVeiculo/index.tsx";
import SobreNos from "./routes/SobreNos/index.tsx";
import SobreProjeto from "./routes/SobreProjeto/index.tsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
