import { localizacoes } from "@prisma/client";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";

class DeleteLocalizacaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!id) {
      throw new Error("O ID da localização é obrigatório para exclusão");
    }

    const existeLocalizacao = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id);
    if (!existeLocalizacao) {
      throw new Error("Não existe uma localização com esse id");
    }

    await repositorioLocalizacao.eliminarLocalizacao(id);
  }
}

export { DeleteLocalizacaoCasoDeUso };