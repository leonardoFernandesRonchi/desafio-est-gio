import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Contas from "../pages/Contas";
import ContaDetalhe from "../pages/ContaDetalhe";
import NovaConta from "../pages/NovaConta";
import Transferencia from "../pages/Transferencia";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/transferencia" element={<Transferencia />} />
          <Route path="/" element={<Contas />} />
          <Route path="/contas/:id" element={<ContaDetalhe />} />
          <Route path="/nova" element={<NovaConta />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
