import { localizacoes } from "@prisma/client";
import { DadosLocalizacao } from "../../repositorioLocalizacao/ILocalizacao";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { AppError } from "../../../../errors/AppError";

class CriarLocalizacaoCasoDeUso {
  async execute({
    nomeLocalizacao,
    descricao,
  }: DadosLocalizacao): Promise<localizacoes> {
    const localizacaoRepositorio = new LocalizacaoRepositorio();

    const existeNomeLocalizacao =
      await localizacaoRepositorio.listarUmLocalizacaoPeloNome(nomeLocalizacao);
    if (existeNomeLocalizacao) {
      throw new AppError(
        `Já existe uma localização com o nome ${nomeLocalizacao}`
      );
    }

    const novaLocalizacao = await localizacaoRepositorio.criarLocalizacao({
      nomeLocalizacao,
      descricao,
    });

    return novaLocalizacao;
  }
}

export { CriarLocalizacaoCasoDeUso };
