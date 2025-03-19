import { Router } from "express";
import { CriarAlertaController } from "../model/alertas/casoDeUso/criarAlerta/CriarAlertaController";
import { ListarTodosAlertasController } from "../model/alertas/casoDeUso/listarTodosAlertas/ListarTodosAlertasController";
import { ListarAlertaPeloNomeController } from "../model/alertas/casoDeUso/listarAlertaPeloNome/ListarAlertaPeloNomeController";

const alertaRoutes = Router();

const criarAlerta = new CriarAlertaController();
const listarTodosAlertas = new ListarTodosAlertasController();
const listarAlertaPeloNome = new ListarAlertaPeloNomeController();

alertaRoutes.post("/", criarAlerta.handle);
alertaRoutes.get("/", listarTodosAlertas.handle);
alertaRoutes.get("/:nomeAlerta", listarAlertaPeloNome.handle);

export { alertaRoutes };