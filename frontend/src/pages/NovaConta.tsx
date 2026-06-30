import { useState } from "react";
import { ContaService } from "../services/contaService";
import type { ContaCreate } from "../types/Conta";
import Toast from "../components/Toast";
import { useError } from "../hooks/useError";

export default function NovaConta() {
  const { error, showError } = useError();

  const [form, setForm] = useState<ContaCreate>({
    titular: "",
    numero: "",
    tipo: "CORRENTE",
    saldo: 0,
  });

  const salvar = async () => {
    try {
      await ContaService.criar(form);
      alert("Conta criada!");
    } catch (err: any) {
      showError(err?.response?.data?.message || "Erro ao criar conta");
    }
  };

  return (
    <div>
      <Toast message={error} />

      <h1>Nova Conta</h1>

      <input
        placeholder="Titular"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, titular: e.target.value })}
      />

      <input
        placeholder="Número"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, numero: e.target.value })}
      />

      <select
        className="border p-2 block mb-2"
        value={form.tipo}
        onChange={(e) =>
          setForm({
            ...form,
            tipo: e.target.value as "CORRENTE" | "POUPANCA",
          })
        }
      >
        <option value="CORRENTE">Corrente</option>
        <option value="POUPANCA">Poupança</option>
      </select>

      <input
        type="number"
        placeholder="Saldo"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, saldo: Number(e.target.value) })}
      />

      <button className="bg-blue-500 text-white px-4 py-2" onClick={salvar}>
        Criar
      </button>
    </div>
  );
}
