import { corredores } from "@prisma/client";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";

class ListarCorredorPeloNomeCasoDeUso {
  async execute(): Promise<corredores[]> {
    const corredorRepositorio = new CorredorRepositorio();
    const result = await corredorRepositorio.listarTodosCorredores();
    return result;
  }
}
export { ListarCorredorPeloNomeCasoDeUso };
