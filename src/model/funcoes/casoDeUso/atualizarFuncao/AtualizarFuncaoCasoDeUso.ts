import { funcoes } from "@prisma/client";
import { DadosFuncao } from "../../repositorioFuncao/IFuncao";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";
import { AppError } from "../../../../errors/AppError";

class AtualizarFuncaoCasoDeUso {
  async execute({
    id,
    descricao,
    nome,
  }: DadosFuncao): Promise<funcoes> {
    const repositorioFuncao = new FuncaoRepositorio();

    if (!id) {
      throw new AppError("O ID da função é obrigatório para atualização");
    }

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id);
    if (!existeFuncao) {
      throw new AppError("Não existe uma função com esse id");
    }

    const funcaoComMesmoNome = await repositorioFuncao.listarFuncaoPeloNome(nome);
    if (funcaoComMesmoNome && funcaoComMesmoNome.id !== id) {
      throw new AppError("Já existe uma função com esse nome");
    }

    const result = await repositorioFuncao.atualizarFuncao({
      id,
      descricao,
      nome,
    });

    return result;
  }
}

export { AtualizarFuncaoCasoDeUso };