import express from "express";
import cors from "cors";

import contaRoutes from "./routes/contaRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/contas", contaRoutes);

export default app;
