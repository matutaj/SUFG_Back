import { alertas } from "@prisma/client";
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";

class ListarTodosAlertasCasoDeUso {
    async execute(): Promise<alertas[]> {
        const repositorioAlerta = new AlertaRepositorio();
        const result = await repositorioAlerta.listarTodosAlertas();
        return result;
    }
}
export {ListarTodosAlertasCasoDeUso}