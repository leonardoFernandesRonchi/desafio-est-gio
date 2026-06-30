import { Request, Response } from "express";
import ContaService from "../services/ContaService";

class ContaController {
  async listar(req: Request, res: Response) {
    try {
      const contas = await ContaService.listar();

      return res.json(contas);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async buscar(req: Request, res: Response) {
    try {
      const conta = await ContaService.buscarPorId(Number(req.params.id));

      return res.json(conta);
    } catch (error: any) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const conta = await ContaService.criar(req.body);

      return res.status(201).json(conta);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async sacar(req: Request, res: Response) {
    try {
      const conta = await ContaService.sacar(
        Number(req.params.id),
        Number(req.body.valor),
      );

      return res.json(conta);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async transferir(req: Request, res: Response) {
    try {
      const { origemId, destinoId, valor } = req.body;

      const resultado = await ContaService.transferir(
        origemId,
        destinoId,
        valor,
      );

      return res.json(resultado);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ContaController();
