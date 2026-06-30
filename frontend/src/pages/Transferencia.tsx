import { useState } from "react";
import { ContaService } from "../services/contaService";
import Toast from "../components/Toast";
import { useError } from "../hooks/useError";

export default function Transferencia() {
  const [origemId, setOrigemId] = useState<number>(0);
  const [destinoId, setDestinoId] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);

  const { error, showError } = useError();

  const transferir = async () => {
    try {
      await ContaService.transferir({
        origemId,
        destinoId,
        valor,
      });

      alert("Transferência realizada!");
    } catch (err: any) {
      showError(err?.response?.data?.message || "Erro na transferência");
    }
  };

  return (
    <div>
      <Toast message={error} />
      <h1 className="text-xl mb-4">Transferência entre contas</h1>

      <input
        type="number"
        placeholder="Conta origem ID"
        className="border p-2 block mb-2"
        onChange={(e) => setOrigemId(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Conta destino ID"
        className="border p-2 block mb-2"
        onChange={(e) => setDestinoId(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Valor"
        className="border p-2 block mb-2"
        onChange={(e) => setValor(Number(e.target.value))}
      />

      <button
        className="bg-green-600 text-white px-4 py-2"
        onClick={transferir}
      >
        Transferir
      </button>
    </div>
  );
}
