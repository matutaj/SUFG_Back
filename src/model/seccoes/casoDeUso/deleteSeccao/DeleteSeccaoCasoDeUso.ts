import { AppError } from "../../../../errors/AppError";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";
class DeleteSeccaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioSeccao = new SeccaoRepositorio();

    if (!id) {
      throw new AppError("O ID da seção é obrigatório para exclusão");
    }

    const existeSeccao = await repositorioSeccao.listarUmaSeccaoPeloId(id);
    if (!existeSeccao) {
      throw new AppError("Não existe uma seção com esse id");
    }

    await repositorioSeccao.eliminarSeccao(id);
  }
}

export { DeleteSeccaoCasoDeUso };