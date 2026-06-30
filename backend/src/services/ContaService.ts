import Conta from "../models/Conta";
import sequelize from "../config/database";

class ContaService {
  async listar() {
    return await Conta.findAll();
  }

  async buscarPorId(id: number) {
    const conta = await Conta.findByPk(id);

    if (!conta) {
      throw new Error("Conta não encontrada");
    }

    return conta;
  }

  async criar(data: {
    titular: string;
    numero: string;
    tipo: "CORRENTE" | "POUPANCA";
    saldo: number;
  }) {
    const contaExiste = await Conta.findOne({
      where: { numero: data.numero },
    });

    if (contaExiste) {
      throw new Error("Número da conta já cadastrado");
    }

    return await Conta.create(data);
  }

  async sacar(id: number, valor: number) {
    const conta = await this.buscarPorId(id);

    if (valor <= 0) {
      throw new Error("Valor inválido");
    }

    let taxa = 0;

    if (conta.tipo === "CORRENTE") {
      taxa = 1;
    }

    const valorTotal = valor + taxa;
    const saldoFinal = Number(conta.saldo) - valorTotal;

    // Conta Corrente
    if (conta.tipo === "CORRENTE") {
      if (saldoFinal < -500) {
        throw new Error("Limite do cheque especial excedido");
      }
    }

    // Conta Poupança
    if (conta.tipo === "POUPANCA") {
      if (saldoFinal < 0) {
        throw new Error("Saldo insuficiente");
      }
    }

    conta.saldo = saldoFinal;

    await conta.save();

    return conta;
  }

  async transferir(origemId: number, destinoId: number, valor: number) {
    const transaction = await sequelize.transaction();

    try {
      const origem = await this.buscarPorId(origemId);
      const destino = await this.buscarPorId(destinoId);

      let taxa = 0;

      if (origem.tipo === "CORRENTE") {
        taxa = 1;
      }

      const valorTotal = valor + taxa;

      const saldoFinalOrigem = Number(origem.saldo) - valorTotal;

      if (origem.tipo === "CORRENTE" && saldoFinalOrigem < -500) {
        throw new Error("Limite do cheque especial excedido");
      }

      if (origem.tipo === "POUPANCA" && saldoFinalOrigem < 0) {
        throw new Error("Saldo insuficiente");
      }

      origem.saldo = saldoFinalOrigem;
      destino.saldo = Number(destino.saldo) + valor;

      await origem.save({ transaction });
      await destino.save({ transaction });

      await transaction.commit();

      return {
        origem,
        destino,
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

export default new ContaService();
