import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";
import { AppError } from "../../../../errors/AppError";

class DeletePermissaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new AppError("O ID da permissão é obrigatório para exclusão");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id);
    if (!existePermissao) {
      throw new AppError("Não existe uma permissão com esse id");
    }

    await repositorioPermissao.eliminarPermissao(id);
  }
}

export { DeletePermissaoCasoDeUso };