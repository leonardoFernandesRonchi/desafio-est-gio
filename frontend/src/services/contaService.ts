import { api } from "./api";
import type { Conta } from "../types/Conta";

export const ContaService = {
  listar: async (): Promise<Conta[]> => {
    const res = await api.get("/contas");
    return res.data;
  },

  buscar: async (id: number): Promise<Conta> => {
    const res = await api.get(`/contas/${id}`);
    return res.data;
  },

  criar: async (data: Omit<Conta, "id">) => {
    const res = await api.post("/contas", data);
    return res.data;
  },

  sacar: async (id: number, valor: number) => {
    return api.post(`/contas/${id}/saque`, { valor });
  },

  transferir: async (data: {
    origemId: number;
    destinoId: number;
    valor: number;
  }) => {
    return api.post("/contas/transferencia", data);
  },
};
