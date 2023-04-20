import Clientes from "./pages/Clientes";
import Home from "./pages/Home";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Cadastro1 from "./pages/Cadastro1";
import Cadastro2 from "./pages/Cadastro2";
import Login from "./pages/Login";
import { getItem } from "./Utils/storage";

function RotasProtegidas({ redirectTo }) {
  const autenticado = getItem("token");

  return autenticado ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function RotasPrincipais() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/cadastro" element={<Cadastro1 />} />
      {/* <Route path="/cadastro-senha" element={<Cadastro2 />} /> */}
    </Routes>
  );
}
