import { funcionarios } from "@prisma/client";
import { DadosFuncionario } from "../../repositorioFuncionario/IFuncionario";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class AtualizarFuncionarioCasoDeUso {
  async execute({
    id,
    numeroBI,
    nomeFuncionario,
    senha,
    moradaFuncionario,
    telefoneFuncionario,
    emailFuncionario,
    id_funcao
  }: DadosFuncionario): Promise<funcionarios> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!id) {
      throw new AppError("O ID do funcionário é obrigatório para atualização");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    const funcionarioComMesmoBI = await repositorioFuncionario.listarNumeroContribuinteFuncionario(numeroBI);
    if (funcionarioComMesmoBI && funcionarioComMesmoBI.id !== id) {
      throw new AppError("Já existe um funcionário com esse número BI");
    }

    const funcionarioComMesmoEmail = await repositorioFuncionario.listarEmailFuncionario(emailFuncionario);
    if (funcionarioComMesmoEmail && funcionarioComMesmoEmail.id !== id) {
      throw new AppError("Já existe um funcionário com esse email");
    }

    const funcionarioComMesmoTelefone = await repositorioFuncionario.listarTelefoneFuncionario(telefoneFuncionario);
    if (funcionarioComMesmoTelefone && funcionarioComMesmoTelefone.id !== id) {
      throw new AppError("Já existe um funcionário com esse telefone");
    }

    const result = await repositorioFuncionario.atualizarFuncionario({
      id,
      numeroBI,
      nomeFuncionario,
      senha,
      moradaFuncionario,
      telefoneFuncionario,
      emailFuncionario,
      id_funcao
    });

    return result;
  }
}

export { AtualizarFuncionarioCasoDeUso };