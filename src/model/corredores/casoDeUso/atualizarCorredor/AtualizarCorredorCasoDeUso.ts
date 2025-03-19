import { corredores } from "@prisma/client";
import { DadosCorredor } from "../../repositorioCorredores/ICorredor";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";
class AtualizarCorredorCasoDeUso {
  async execute({
    id,
    nomeCorredor,
    descricaoCorredor,
  }: DadosCorredor): Promise<corredores> {
    const repositorioCorredor = new CorredorRepositorio();

    if (!id) {
      throw new Error("O ID do corredor é obrigatório para atualização");
    }

    const existeCorredor = await repositorioCorredor.listarUmCorredorPeloId(id);
    if (!existeCorredor) {
      throw new Error("Não existe um corredor com esse id");
    }

    const corredorComMesmoNome = await repositorioCorredor.listarUmCorredorPeloNome(nomeCorredor);
    if (corredorComMesmoNome && corredorComMesmoNome.id !== id) {
      throw new Error("Já existe um corredor com esse nome");
    }

    const result = await repositorioCorredor.atualizarCorredor({
      id,
      nomeCorredor,
      descricaoCorredor,
    });

    return result;
  }
}

export { AtualizarCorredorCasoDeUso };