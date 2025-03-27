import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";
import { AppError } from "../../../../errors/AppError";

class ListarUmaPermissaoPorIdCasoDeUso {
  async execute(id: string): Promise<permissoes | undefined> {
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioPermissao.listarUmaPermissaoPorID(id);
    return result;
  }
}

export { ListarUmaPermissaoPorIdCasoDeUso };