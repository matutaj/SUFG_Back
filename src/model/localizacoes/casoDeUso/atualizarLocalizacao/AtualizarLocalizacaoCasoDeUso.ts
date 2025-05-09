import { localizacoes } from "@prisma/client";
import { DadosLocalizacao } from "../../repositorioLocalizacao/ILocalizacao";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { AppError } from "../../../../errors/AppError";

class AtualizarLocalizacaoCasoDeUso {
  async execute({
    id,
    nomeLocalizacao,
    descricao,
    tipo
  }: DadosLocalizacao): Promise<localizacoes> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!id) {
      throw new AppError("O ID da localização é obrigatório para atualização");
    }

    const existeLocalizacao = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id);
    if (!existeLocalizacao) {
      throw new AppError("Não existe uma localização com esse id");
    }

    const localizacaoComMesmoNome = await repositorioLocalizacao.listarUmLocalizacaoPeloNome(nomeLocalizacao);
    if (localizacaoComMesmoNome && localizacaoComMesmoNome.id !== id) {
      throw new AppError("Já existe uma localização com esse nome");
    }

    const result = await repositorioLocalizacao.atualizarLocalizacao({
      id,
      nomeLocalizacao,
      descricao,
      tipo
    });

    return result;
  }
}

export { AtualizarLocalizacaoCasoDeUso };