import { seccoes } from "@prisma/client";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";
class ListarUmaSeccaoPeloIdCasoDeUso {
  async execute(id: string): Promise<seccoes | undefined> {
    const repositorioSeccao = new SeccaoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioSeccao.listarUmaSeccaoPeloId(id);
    return result;
  }
}

export { ListarUmaSeccaoPeloIdCasoDeUso };