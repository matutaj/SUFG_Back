import { localizacoes } from "@prisma/client";
import { DadosLocalizacao } from "../../repositorioLocalizacao/ILocalizacao";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";

class CriarLocalizacaoCasoDeUso {
  async execute({
    nomeLocalizacao,
    descricaoLocalizacao,
    localProduto,
  }: DadosLocalizacao): Promise<localizacoes> {
    const localizacaoRepositorio = new LocalizacaoRepositorio();

    const existeNomeLocalizacao =
      await localizacaoRepositorio.listarUmLocalizacaoPeloNome(nomeLocalizacao);
    if (existeNomeLocalizacao) {
      throw new Error(
        `Já existe uma localização com o nome ${nomeLocalizacao}`
      );
    }

    const novaLocalizacao = await localizacaoRepositorio.criarLocalizacao({
      nomeLocalizacao,
      descricaoLocalizacao,
      localProduto,
    });

    return novaLocalizacao;
  }
}

export { CriarLocalizacaoCasoDeUso };
