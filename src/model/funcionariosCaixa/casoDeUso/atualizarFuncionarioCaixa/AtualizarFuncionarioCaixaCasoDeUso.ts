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
  }: Partial<DadosFuncionarioCaixa>): Promise<funcionariosCaixa> {
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

    // Validar id_caixa apenas se fornecido
    if (id_caixa && id_caixa !== existeFuncionarioCaixa.id_caixa) {
      const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id_caixa);
      if (!existeCaixa) {
        throw new AppError("Não existe um caixa com esse id");
      }
    }

    // Validar id_funcionario apenas se fornecido
    if (id_funcionario && id_funcionario !== existeFuncionarioCaixa.id_funcionario) {
      const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
      if (!existeFuncionario) {
        throw new AppError("Não existe um funcionário com esse id");
      }
    }

    // Validar quantidadaFaturada apenas se fornecido
    if (quantidadaFaturada !== undefined && quantidadaFaturada < 0) {
      throw new AppError("A quantidade faturada não pode ser negativa");
    }

    // Validar estadoCaixa ao fechar
    if (estadoCaixa === false && existeFuncionarioCaixa.estadoCaixa === false) {
      throw new AppError("O caixa já está fechado");
    }

    const result = await repositorioFuncionarioCaixa.atualizarFuncionarioCaixa({
      id,
      id_caixa: id_caixa || existeFuncionarioCaixa.id_caixa,
      id_funcionario: id_funcionario || existeFuncionarioCaixa.id_funcionario,
      estadoCaixa: estadoCaixa !== undefined ? estadoCaixa : existeFuncionarioCaixa.estadoCaixa,
      quantidadaFaturada: quantidadaFaturada !== undefined ? quantidadaFaturada : Number(existeFuncionarioCaixa.quantidadaFaturada),
      horarioAbertura: horarioAbertura || existeFuncionarioCaixa.horarioAbertura,
      horarioFechamento: horarioFechamento || existeFuncionarioCaixa.horarioFechamento,
    });

    return result;
  }
}

export { AtualizarFuncionarioCaixaCasoDeUso };