import { localizacoes } from "@prisma/client";
import { DadosLocalizacao } from "../../repositorioLocalizacao/ILocalizacao";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";

class AtualizarLocalizacaoCasoDeUso {
  async execute({
    id,
    nomeLocalizacao,
    descricaoLocalizacao,
    localProduto,
  }: DadosLocalizacao): Promise<localizacoes> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!id) {
      throw new Error("O ID da localização é obrigatório para atualização");
    }

    const existeLocalizacao = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id);
    if (!existeLocalizacao) {
      throw new Error("Não existe uma localização com esse id");
    }

    const localizacaoComMesmoNome = await repositorioLocalizacao.listarUmLocalizacaoPeloNome(nomeLocalizacao);
    if (localizacaoComMesmoNome && localizacaoComMesmoNome.id !== id) {
      throw new Error("Já existe uma localização com esse nome");
    }

    const result = await repositorioLocalizacao.atualizarLocalizacao({
      id,
      nomeLocalizacao,
      descricaoLocalizacao,
      localProduto,
    });

    return result;
  }
}

export { AtualizarLocalizacaoCasoDeUso };