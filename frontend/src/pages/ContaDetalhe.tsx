import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContaService } from "../services/contaService";
import { useError } from "../hooks/useError";
import Toast from "../components/Toast";
import type { Conta } from "../types/Conta";
import Modal from "../components/Modal";

export default function ContaDetalhe() {
  const { error, showError } = useError();
  const { id } = useParams();
  const [conta, setConta] = useState<Conta | null>(null);

  const [openSaque, setOpenSaque] = useState(false);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (id) ContaService.buscar(Number(id)).then(setConta);
  }, [id]);

  const sacar = async () => {
    try {
      await ContaService.sacar(Number(id), valor);

      const updated = await ContaService.buscar(Number(id));
      setConta(updated);

      setOpenSaque(false);
    } catch (err: any) {
      showError(err?.response?.data?.message || "Erro ao sacar");
    }
  };

  if (!conta) return <p>Carregando...</p>;

  return (
    <div>
      <Toast message={error} />
      <h1 className="text-xl">{conta.titular}</h1>
      <p>Saldo: R$ {conta.saldo}</p>

      <button
        className="bg-red-500 text-white px-4 py-2 mt-4"
        onClick={() => setOpenSaque(true)}
      >
        Sacar
      </button>

      <Modal open={openSaque} onClose={() => setOpenSaque(false)}>
        <h2>Saque</h2>

        <input
          type="number"
          className="border p-2 w-full"
          onChange={(e) => setValor(Number(e.target.value))}
        />

        <button
          className="bg-green-500 text-white px-4 py-2 mt-3"
          onClick={sacar}
        >
          Confirmar
        </button>
      </Modal>
    </div>
  );
}
