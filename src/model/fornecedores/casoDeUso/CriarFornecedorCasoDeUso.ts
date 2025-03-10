import { fornecedores } from "@prisma/client";
import { DadosFornecedor } from "../RepositorioFornecedor/IFornecedor";
import { FornecedorRepositorio } from "../RepositorioFornecedor/implementacoes/RepositorioFornecedor";

class CriarFornecedorCasoDeUso {
    async execute({emailFornecedor, moradaFornecedor, nomeFornecedor, nif, telefoneFornecedor}: DadosFornecedor): Promise<fornecedores> {
        const repositorioFornecedor = new FornecedorRepositorio()
        const existeEmail = await repositorioFornecedor.listarEmailFornecedor(emailFornecedor)
        if(existeEmail){
            throw new Error("Já existe um Fornecedor com esse email")
        }
        const existeContribuinte= await repositorioFornecedor.listarNumeroDeContribuinte(nif)
        if(existeContribuinte){
            throw new Error("Já existe um fornecedor com esse número de contribuinte")
        }
        const existeTelefone= await repositorioFornecedor.listarTelefoneFornecedor(telefoneFornecedor)
        if(existeTelefone){
            throw new Error("Já existe um fornecedor com esse telefone")
        }
        const result = await repositorioFornecedor.criarFornecedor({emailFornecedor, moradaFornecedor, nif, nomeFornecedor, telefoneFornecedor})
        return result

    }
}
export {CriarFornecedorCasoDeUso}