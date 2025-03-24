import { corredores } from "@prisma/client";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";
import { AppError } from "../../../../errors/AppError";

class ListarCorredorPeloNomeCasoDeUso {
  async execute(nomeCorredor: string): Promise<corredores> {
    const corredorRepositorio = new CorredorRepositorio();
    const existeCorredor = await corredorRepositorio.listarUmCorredorPeloNome(
      nomeCorredor
    );
    if (!existeCorredor) {
      throw new AppError("Nao existe um corredor com esse nome");
    }
    return existeCorredor;
  }
}
export { ListarCorredorPeloNomeCasoDeUso };
