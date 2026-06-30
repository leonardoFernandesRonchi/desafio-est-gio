import { Router } from "express";
import contaController from "../controllers/ContaController";

const router = Router();

router.get("/", contaController.listar);

router.get("/:id", contaController.buscar);

router.post("/", contaController.criar);

router.post("/:id/saque", contaController.sacar);

router.post("/transferencia", contaController.transferir);

export default router;
