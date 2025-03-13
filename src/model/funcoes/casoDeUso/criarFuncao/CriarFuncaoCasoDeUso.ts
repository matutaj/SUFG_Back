import { DadosFuncao } from "../../repositorioFuncao/IFuncao";
import { funcoes } from "@prisma/client";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";
class CriarFuncaoCasoDeUso{
    async execute({nome, descricao}: DadosFuncao): Promise<funcoes> {
        const repositorioFuncao = new FuncaoRepositorio();
        const existeNome = await repositorioFuncao.listarFuncaoPeloNome(nome);
        if (existeNome) {
            throw new Error("Já existe uma funcao com esse nome");
        }
        const result = await repositorioFuncao.criarFuncao({nome, descricao});
        return result;
    }
}
export {CriarFuncaoCasoDeUso}