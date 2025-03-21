import { funcionariosCaixa } from "@prisma/client";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";

class DeleteFuncionarioCaixaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();

    if (!id) {
      throw new Error("O ID do funcionário-caixa é obrigatório para exclusão");
    }

    const existeFuncionarioCaixa = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(id);
    if (!existeFuncionarioCaixa) {
      throw new Error("Não existe um registro de funcionário-caixa com esse id");
    }

    await repositorioFuncionarioCaixa.eliminarFuncionarioCaixa(id);
  }
}

export { DeleteFuncionarioCaixaCasoDeUso };