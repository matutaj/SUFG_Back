import { Router } from "express";
import { CriarAlertaController } from "../model/alertas/casoDeUso/criarAlerta/CriarAlertaController";
import { ListarTodosAlertasController } from "../model/alertas/casoDeUso/listarTodosAlertas/ListarTodosAlertasController";
import { ListarAlertaPeloNomeController } from "../model/alertas/casoDeUso/listarAlertaPeloNome/ListarAlertaPeloNomeController";
import { AtualizarAlertaController } from "../model/alertas/casoDeUso/atualizarAlerta/AtualizarAlertaController";
import { DeleteAlertaController } from "../model/alertas/casoDeUso/deleteAlerta/DeleteAlertaControoller";
import { ListarUmAlertaPeloIdController } from "../model/alertas/casoDeUso/listarAlertaPeloId/ListarAlertaPeloIdController";
const alertaRoutes = Router();

const criarAlerta = new CriarAlertaController();
const listarTodosAlertas = new ListarTodosAlertasController();
const listarAlertaPeloNome = new ListarAlertaPeloNomeController();
const atualizarAlerta = new AtualizarAlertaController();
const deleteAlerta = new DeleteAlertaController();
const listarAlertaPeloId = new ListarUmAlertaPeloIdController();

alertaRoutes.put("/:id", atualizarAlerta.handle);
alertaRoutes.get("/:id", listarAlertaPeloId.handle);
alertaRoutes.delete("/:id", deleteAlerta.handle);
alertaRoutes.post("/", criarAlerta.handle);
alertaRoutes.get("/", listarTodosAlertas.handle);
alertaRoutes.get("/:nomeAlerta", listarAlertaPeloNome.handle);

export { alertaRoutes };