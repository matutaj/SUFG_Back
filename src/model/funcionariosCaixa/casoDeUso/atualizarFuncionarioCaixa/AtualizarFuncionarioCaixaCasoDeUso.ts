import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa } from "../../repositorioFuncionarioCaixa/IFuncionarioCaixa";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { CaixaRepositorio } from "../../../caixas/repositorioCaixa/implementacoes/RepositorioCaixa";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";
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
      throw new AppError("O ID do funcionário-caixa é obrigatório para atualização");
    }

    const existeFuncionarioCaixa = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(id);
    if (!existeFuncionarioCaixa) {
      throw new AppError("Não existe um registro de funcionário-caixa com esse id");
    }

    const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id_caixa);
    if (!existeCaixa) {
      throw new AppError("Não existe um caixa com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    if (horarioFechamento <= horarioAbertura) {
      throw new AppError("O horário de fechamento deve ser posterior ao horário de abertura");
    }

    if (quantidadaFaturada < 0) {
      throw new AppError("A quantidade faturada não pode ser negativa");
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