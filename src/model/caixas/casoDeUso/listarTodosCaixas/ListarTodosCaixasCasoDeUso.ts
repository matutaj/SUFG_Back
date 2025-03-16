import { caixas } from "@prisma/client";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";

class ListarTodosCaixasCasoDeUso {
    async execute(): Promise<caixas[]> {
        const caixaRepositorio = new CaixaRepositorio();
        const result = await caixaRepositorio.listarTodosCaixas();
        return result
    }
}
export { ListarTodosCaixasCasoDeUso}