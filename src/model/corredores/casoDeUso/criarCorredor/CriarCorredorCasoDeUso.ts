import { corredores } from "@prisma/client";
import { DadosCorredor } from "../../repositorioCorredores/ICorredor";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";

class CriarCorredorCasoDeUso {
  async execute({
    nomeCorredor,
    descricaoCorredor,
  }: DadosCorredor): Promise<corredores> {
    const repositorioCorredor = new CorredorRepositorio();
    const existeNome = await repositorioCorredor.listarUmCorredorPeloNome(
      nomeCorredor
    );
    if (existeNome) {
      throw new Error("Já existe um corredor com esse nome");
    }
    const result = await repositorioCorredor.criarCorredor({
      nomeCorredor,
      descricaoCorredor,
    });
    return result;
  }
}
export { CriarCorredorCasoDeUso };
