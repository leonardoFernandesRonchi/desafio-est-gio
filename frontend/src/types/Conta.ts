export interface Conta {
  id: number;
  titular: string;
  numero: string;
  tipo: "CORRENTE" | "POUPANCA";
  saldo: number;
}

export type ContaCreate = Omit<Conta, "id">;
