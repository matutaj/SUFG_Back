import { localizacoes } from "@prisma/client";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { AppError } from "../../../../errors/AppError";

class DeleteLocalizacaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!id) {
      throw new AppError("O ID da localização é obrigatório para exclusão");
    }

    const existeLocalizacao =
      await repositorioLocalizacao.listarUmLocalizacaoPeloId(id);
    if (!existeLocalizacao) {
      throw new AppError("Não existe uma localização com esse id");
    }

    await repositorioLocalizacao.eliminarLocalizacao(id);
  }
}

export { DeleteLocalizacaoCasoDeUso };
