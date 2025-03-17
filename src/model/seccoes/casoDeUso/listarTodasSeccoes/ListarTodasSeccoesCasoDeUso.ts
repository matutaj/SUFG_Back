import { seccoes } from "@prisma/client";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";

class ListarTodasSeccoesCasoDeUso {
    async execute(): Promise<seccoes[]> {
        const seccaoRepositorio = new SeccaoRepositorio();
        const result = await seccaoRepositorio.listarTodasSeccoes();
        return result;
    }
}
export { ListarTodasSeccoesCasoDeUso };