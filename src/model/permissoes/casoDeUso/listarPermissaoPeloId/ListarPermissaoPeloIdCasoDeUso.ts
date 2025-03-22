import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";

class ListarUmaPermissaoPorIdCasoDeUso {
  async execute(id: string): Promise<permissoes | undefined> {
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioPermissao.listarUmaPermissaoPorID(id);
    return result;
  }
}

export { ListarUmaPermissaoPorIdCasoDeUso };