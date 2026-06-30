import { Model, DataTypes } from "sequelize";

import sequelize from "../config/database";

class Conta extends Model {
  declare id: number;
  declare titular: string;
  declare numero: string;
  declare tipo: "CORRENTE" | "POUPANCA";
  declare saldo: number;
}

Conta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    titular: DataTypes.STRING,

    numero: DataTypes.STRING,

    tipo: DataTypes.ENUM("CORRENTE", "POUPANCA"),

    saldo: DataTypes.DECIMAL(10, 2),
  },
  {
    sequelize,

    tableName: "contas",

    underscored: true,
  },
);

export default Conta;
