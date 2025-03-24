import { localizacoes } from "@prisma/client";
import { LocalizacaoRepositorio } from "../../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";

class ListarTodosLocalizacoesCasoDeUso {
  async execute(): Promise<localizacoes[]> {
    const repositorioLocalizacao = new LocalizacaoRepositorio();
    const result = await repositorioLocalizacao.listarTodosLocalizacoes();
    return result;
  }
}

export { ListarTodosLocalizacoesCasoDeUso };
