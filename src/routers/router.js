import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import DadosEmpresa from "../pages/DadosEmpresa"
import Usuarios from "../pages/Usuarios"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dados-empresa",
    element: <DadosEmpresa />,
  },
  {
    path: "/users",
    element: <Usuarios />,
  },
  {
    path: "/produtos",
    element: <h1>Produto</h1>,
  },
]);


export default router