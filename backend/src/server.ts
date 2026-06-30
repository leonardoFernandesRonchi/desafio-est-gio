import app from "./app";
import sequelize from "./config/database";

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();

    console.log("Banco conectado.");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
