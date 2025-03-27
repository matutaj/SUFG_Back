import { seccoes } from "@prisma/client";
import { DadosSeccao } from "../../repositorioSeccoes/ISeccao";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";
import { AppError } from "../../../../errors/AppError";
class AtualizarSeccaoCasoDeUso {
  async execute({
    id,
    nomeSeccao,
    descricao,
  }: DadosSeccao): Promise<seccoes> {
    const repositorioSeccao = new SeccaoRepositorio();

    if (!id) {
      throw new AppError("O ID da seção é obrigatório para atualização");
    }

    const existeSeccao = await repositorioSeccao.listarUmaSeccaoPeloId(id);
    if (!existeSeccao) {
      throw new AppError("Não existe uma seção com esse id");
    }

    const seccaoComMesmoNome = await repositorioSeccao.listarUmaSeccaoPeloNome(nomeSeccao);
    if (seccaoComMesmoNome && seccaoComMesmoNome.id !== id) {
      throw new AppError("Já existe uma seção com esse nome");
    }

    const result = await repositorioSeccao.atualizarSeccao({
      id,
      nomeSeccao,
      descricao,
    });

    return result;
  }
}

export { AtualizarSeccaoCasoDeUso };