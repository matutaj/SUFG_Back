import { corredores } from "@prisma/client";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";

class listarCorredorPeloNomeCasoDeUso {
    async execute(): Promise<corredores[]> {
        const corredorRepositorio = new CorredorRepositorio();
        const result = await corredorRepositorio.listarTodosCorredores();
        return result;
    }
}
export { listarCorredorPeloNomeCasoDeUso };