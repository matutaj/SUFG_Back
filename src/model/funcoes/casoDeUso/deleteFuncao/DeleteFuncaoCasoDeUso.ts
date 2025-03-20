import { funcoes } from "@prisma/client";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";

class DeleteFuncaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncao = new FuncaoRepositorio();

    if (!id) {
      throw new Error("O ID da função é obrigatório para exclusão");
    }

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id);
    if (!existeFuncao) {
      throw new Error("Não existe uma função com esse id");
    }

    await repositorioFuncao.eliminarFuncao(id);
  }
}

export { DeleteFuncaoCasoDeUso };