import { localizacoes } from "@prisma/client";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { AppError } from "../../../../errors/AppError";

class ListarUmLocalizacaoPeloIdCasoDeUso {
  async execute(id: string): Promise<localizacoes | undefined> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id);
    return result;
  }
}

export { ListarUmLocalizacaoPeloIdCasoDeUso };
