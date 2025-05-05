import { funcionarios } from "@prisma/client";
import { DadosFuncionario } from "../../repositorioFuncionario/IFuncionario";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";
import bcypt from "bcrypt";

class CriarFuncionarioCasoDeUso {
  async execute({
    emailFuncionario,
    moradaFuncionario,
    nomeFuncionario,
    numeroBI,
    telefoneFuncionario,
    senha,
    id_funcao
  }: DadosFuncionario): Promise<funcionarios> {
    const repositorioFuncionario = new FuncionarioRepositorio();
    const existeEmail = await repositorioFuncionario.listarEmailFuncionario(
      emailFuncionario
    );
    if (existeEmail) {
      throw new AppError("Já existe um funcionário com esse email");
    }
    const existeContribuinte =
      await repositorioFuncionario.listarNumeroContribuinteFuncionario(
        numeroBI
      );
    if (existeContribuinte) {
      throw new AppError(
        "Já existe um funcionário com esse número de contribuinte"
      );
    }
    const existeTelefone =
      await repositorioFuncionario.listarTelefoneFuncionario(
        telefoneFuncionario
      );
    if (existeTelefone) {
      throw new AppError("Já existe um funcionário com esse telefone");
    }

    const cryptografarSenha = await bcypt.hash(senha, 10);
    const result = await repositorioFuncionario.criarFuncionario({
      emailFuncionario,
      moradaFuncionario,
      nomeFuncionario,
      numeroBI,
      telefoneFuncionario,
      id_funcao,
      senha: cryptografarSenha,
    });
    return result;
  }
}
export { CriarFuncionarioCasoDeUso };
