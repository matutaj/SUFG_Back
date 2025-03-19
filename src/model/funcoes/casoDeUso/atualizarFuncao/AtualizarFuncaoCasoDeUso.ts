import { funcoes } from "@prisma/client";
import { DadosFuncao } from "../../repositorioFuncao/IFuncao";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";

class AtualizarFuncaoCasoDeUso {
  async execute({
    id,
    descricao,
    nome,
  }: DadosFuncao): Promise<funcoes> {
    const repositorioFuncao = new FuncaoRepositorio();

    if (!id) {
      throw new Error("O ID da função é obrigatório para atualização");
    }

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id);
    if (!existeFuncao) {
      throw new Error("Não existe uma função com esse id");
    }

    const funcaoComMesmoNome = await repositorioFuncao.listarFuncaoPeloNome(nome);
    if (funcaoComMesmoNome && funcaoComMesmoNome.id !== id) {
      throw new Error("Já existe uma função com esse nome");
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