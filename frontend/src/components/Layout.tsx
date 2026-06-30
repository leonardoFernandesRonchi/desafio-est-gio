import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Contas</Link>
        <Link to="/nova">Nova Conta</Link>
        <Link to="/transferencia">Transferência</Link>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
