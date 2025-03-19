import { funcionarios } from "@prisma/client";
import { DadosFuncionario } from "../../repositorioFuncionario/IFuncionario";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class AtualizarFuncionarioCasoDeUso {
  async execute({
    id,
    numeroBI,
    nomeFuncionario,
    senha,
    moradaFuncionario,
    telefoneFuncionario,
    emailFuncionario,
  }: DadosFuncionario): Promise<funcionarios> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!id) {
      throw new Error("O ID do funcionário é obrigatório para atualização");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    const funcionarioComMesmoBI = await repositorioFuncionario.listarNumeroContribuinteFuncionario(numeroBI);
    if (funcionarioComMesmoBI && funcionarioComMesmoBI.id !== id) {
      throw new Error("Já existe um funcionário com esse número BI");
    }

    const funcionarioComMesmoEmail = await repositorioFuncionario.listarEmailFuncionario(emailFuncionario);
    if (funcionarioComMesmoEmail && funcionarioComMesmoEmail.id !== id) {
      throw new Error("Já existe um funcionário com esse email");
    }

    const funcionarioComMesmoTelefone = await repositorioFuncionario.listarTelefoneFuncionario(telefoneFuncionario);
    if (funcionarioComMesmoTelefone && funcionarioComMesmoTelefone.id !== id) {
      throw new Error("Já existe um funcionário com esse telefone");
    }

    const result = await repositorioFuncionario.atualizarFuncionario({
      id,
      numeroBI,
      nomeFuncionario,
      senha,
      moradaFuncionario,
      telefoneFuncionario,
      emailFuncionario,
    });

    return result;
  }
}

export { AtualizarFuncionarioCasoDeUso };