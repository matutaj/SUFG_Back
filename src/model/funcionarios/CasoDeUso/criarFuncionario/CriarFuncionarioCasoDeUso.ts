import { funcionarios } from "@prisma/client";
import { DadosFuncionario } from "../../repositorioFuncionario/IFuncionario";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class CriarFuncionarioCasoDeUso {
    async execute({emailFuncionario, moradaFuncionario, nomeFuncionario, numeroBI, telefoneFuncionario, senha}: DadosFuncionario): Promise<funcionarios> {
        const repositorioFuncionario = new FuncionarioRepositorio();
        const existeEmail = await repositorioFuncionario.listarEmailFuncionario(emailFuncionario);
        if (existeEmail) {
            throw new Error("Já existe um funcionário com esse email");
        }
        const existeContribuinte = await repositorioFuncionario.listarNumeroContribuinteFuncionario(numeroBI);
        if (existeContribuinte) {
            throw new Error("Já existe um funcionário com esse número de contribuinte");
        }
        const existeTelefone = await repositorioFuncionario.listarTelefoneFuncionario(telefoneFuncionario);
        if (existeTelefone) {
            throw new Error("Já existe um funcionário com esse telefone");
        }
        const result = await repositorioFuncionario.criarFuncionario({emailFuncionario, moradaFuncionario, nomeFuncionario, numeroBI, telefoneFuncionario, senha});
        return result;
    }
}
export {CriarFuncionarioCasoDeUso}