import { corredores } from "@prisma/client";
import { DadosCorredor } from "../../repositorioCorredores/ICorredor";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";
import { AppError } from "../../../../errors/AppError";

class CriarCorredorCasoDeUso {
  async execute({
    nomeCorredor,
    descricao,
  }: DadosCorredor): Promise<corredores> {
    const repositorioCorredor = new CorredorRepositorio();
    const existeNome = await repositorioCorredor.listarUmCorredorPeloNome(
      nomeCorredor
    );
    if (existeNome) {
      throw new AppError("Já existe um corredor com esse nome");
    }
    const result = await repositorioCorredor.criarCorredor({
      nomeCorredor,
      descricao,
    });
    return result;
  }
}
export { CriarCorredorCasoDeUso };
