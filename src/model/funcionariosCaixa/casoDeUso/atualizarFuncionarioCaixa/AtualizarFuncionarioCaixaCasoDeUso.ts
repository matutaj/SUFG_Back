import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa } from "../../repositorioFuncionarioCaixa/IFuncionarioCaixa";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { CaixaRepositorio } from "../../../caixas/repositorioCaixa/implementacoes/RepositorioCaixa";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
class AtualizarFuncionarioCaixaCasoDeUso {
  async execute({
    id,
    id_caixa,
    id_funcionario,
    estadoCaixa,
    quantidadaFaturada,
    horarioAbertura,
    horarioFechamento,
  }: DadosFuncionarioCaixa): Promise<funcionariosCaixa> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();
    const repositorioCaixa = new CaixaRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!id) {
      throw new Error("O ID do funcionário-caixa é obrigatório para atualização");
    }

    const existeFuncionarioCaixa = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(id);
    if (!existeFuncionarioCaixa) {
      throw new Error("Não existe um registro de funcionário-caixa com esse id");
    }

    const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id_caixa);
    if (!existeCaixa) {
      throw new Error("Não existe um caixa com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    if (horarioFechamento <= horarioAbertura) {
      throw new Error("O horário de fechamento deve ser posterior ao horário de abertura");
    }

    if (quantidadaFaturada < 0) {
      throw new Error("A quantidade faturada não pode ser negativa");
    }

    const result = await repositorioFuncionarioCaixa.atualizarFuncionarioCaixa({
      id,
      id_caixa,
      id_funcionario,
      estadoCaixa,
      quantidadaFaturada,
      horarioAbertura,
      horarioFechamento,
    });

    return result;
  }
}

export { AtualizarFuncionarioCaixaCasoDeUso };