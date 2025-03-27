import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa } from "../../repositorioFuncionarioCaixa/IFuncionarioCaixa";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { CaixaRepositorio } from "../../../caixas/repositorioCaixa/implementacoes/RepositorioCaixa";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class CriarFuncionarioCaixaCasodeUso {
  async execute({
    horarioAbertura,
    horarioFechamento,
    id_caixa,
    id_funcionario,
    quantidadaFaturada,
  }: DadosFuncionarioCaixa): Promise<funcionariosCaixa> {
    const funcionarioCaixaRepositorio = new FuncionarioCaixaRepositorio();
    const caixaRepositorio = new CaixaRepositorio();
    const funcionarioRepositorio = new FuncionarioRepositorio();

    const existeCaixa = await caixaRepositorio.listarUmCaixaPeloId(id_caixa);
    if (!existeCaixa) {
      throw new AppError("Não existe um caixa com este Id");
    }

    const existeFuncionario =
      await funcionarioRepositorio.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError(`Não existe um funcionário com o ID ${id_funcionario}`);
    }

    const listarEstadoCaixa =
      await funcionarioCaixaRepositorio.listarEstadoCaixa(id_caixa);
    if (listarEstadoCaixa?.estadoCaixa === true) {
      throw new AppError("O caixa já está aberto");
    }

    const result = await funcionarioCaixaRepositorio.criarFuncionarioCaixa({
      id_caixa,
      id_funcionario,
      estadoCaixa: true,
      horarioAbertura,
      horarioFechamento,
      quantidadaFaturada,
    });
    return result;
  }
}
export { CriarFuncionarioCaixaCasodeUso };
