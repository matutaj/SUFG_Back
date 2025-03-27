import { seccoes } from "@prisma/client";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";
import { AppError } from "../../../../errors/AppError";

class ListarSeccaoPeloNomeCasoDeUso {
    async execute(nomeSeccao: string): Promise<seccoes> {
        const seccaoRespositorio = new SeccaoRepositorio();
        const existeNomeSeccao = await seccaoRespositorio.listarUmaSeccaoPeloNome(nomeSeccao);
        if (!existeNomeSeccao) {
            throw new AppError("Não existe uma seccao com esse nome");
        }
        return existeNomeSeccao
    }
}
export {ListarSeccaoPeloNomeCasoDeUso}