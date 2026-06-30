import { useEffect, useState } from "react";
import { ContaService } from "../services/contaService";
import type { Conta } from "../types/Conta";
import { Link } from "react-router-dom";

export default function Contas() {
  const [contas, setContas] = useState<Conta[]>([]);

  useEffect(() => {
    ContaService.listar().then(setContas);
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-4">Contas</h1>

      <div className="grid gap-3">
        {contas.map((c) => (
          <Link
            key={c.id}
            to={`/contas/${c.id}`}
            className="bg-white p-4 rounded shadow"
          >
            <p>{c.titular}</p>
            <p>Saldo: R$ {c.saldo}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
