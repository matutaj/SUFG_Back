import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";

class DeletePermissaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new Error("O ID da permissão é obrigatório para exclusão");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id);
    if (!existePermissao) {
      throw new Error("Não existe uma permissão com esse id");
    }

    await repositorioPermissao.eliminarPermissao(id);
  }
}

export { DeletePermissaoCasoDeUso };