import { seccoes } from "@prisma/client";
import { DadosSeccao } from "../../repositorioSeccoes/ISeccao";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";
class AtualizarSeccaoCasoDeUso {
  async execute({
    id,
    nomeSeccao,
    descricaoSeccao,
  }: DadosSeccao): Promise<seccoes> {
    const repositorioSeccao = new SeccaoRepositorio();

    if (!id) {
      throw new Error("O ID da seção é obrigatório para atualização");
    }

    const existeSeccao = await repositorioSeccao.listarUmaSeccaoPeloId(id);
    if (!existeSeccao) {
      throw new Error("Não existe uma seção com esse id");
    }

    const seccaoComMesmoNome = await repositorioSeccao.listarUmaSeccaoPeloNome(nomeSeccao);
    if (seccaoComMesmoNome && seccaoComMesmoNome.id !== id) {
      throw new Error("Já existe uma seção com esse nome");
    }

    const result = await repositorioSeccao.atualizarSeccao({
      id,
      nomeSeccao,
      descricaoSeccao,
    });

    return result;
  }
}

export { AtualizarSeccaoCasoDeUso };