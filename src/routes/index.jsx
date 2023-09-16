import { Routes, Route, useLocation } from "react-router-dom";

import { MenuSuperior } from "../componentes/MenuSuperior";
import { MenuLateral } from "../componentes/MenuLateral";

import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Empresa } from "../pages/Empresa";
import { Usuario } from "../pages/Usuario";
import { Recompensa } from "../pages/Recompensa";

import { Permission } from "../util/Permission";

const PageDashboard = Permission()(Dashboard);
const PageUsuario = Permission()(Usuario);
const PageEmpresa = Permission()(Empresa);
const PageRecompensa = Permission()(Recompensa);

export function Rotas() {
  const location = useLocation();

  return (
    <main className="page">
      {location.pathname !== "/" && (
        <>
          <MenuSuperior />
          <MenuLateral />
        </>
      )}
      <section
        className={[
          "page-content",
          location.pathname === "/" ? "login" : "",
        ].join(" ")}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PageDashboard />} />
          <Route path="/empresa" element={<PageEmpresa />} />
          <Route path="/usuario" element={<PageUsuario />} />
          <Route path="/recompensa" element={<PageRecompensa />} />
        </Routes>
      </section>
    </main>
  );
}
