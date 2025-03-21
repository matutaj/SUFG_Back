import { localizacoes } from "@prisma/client";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";

class ListarUmLocalizacaoPeloNomeCasoDeUso {
  async execute(nomeLocalizacao: string): Promise<localizacoes | undefined> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!nomeLocalizacao) {
      throw new Error("O nome da localização é obrigatório para a busca");
    }

    const result = await repositorioLocalizacao.listarUmLocalizacaoPeloNome(nomeLocalizacao);
    return result;
  }
}

export { ListarUmLocalizacaoPeloNomeCasoDeUso };