import { fornecedores } from "@prisma/client";

export interface DadosFornecedor {
    id?: string;
    nif: string;
    nomeFornecedor: string;
    moradaFornecedor: string;
    telefoneFornecedor: number;
    emailFornecedor: string;
}
export interface IFornecedor {
    criarFornecedor({}: DadosFornecedor): Promise<fornecedores>;
    listarTodosFornecedores(): Promise<fornecedores[]>;
    listarUmFornecedorPeloId(id: string): Promise<fornecedores | undefined>;
    listarUmFornecedorPeloNome(nif: string): Promise<fornecedores | undefined>;
    atualizarFornecedor({}: DadosFornecedor): Promise<fornecedores>;
    eliminarFornecedor(id: string): Promise<void>;
    listarEmailFornecedor(emailFornecedor: string): Promise<fornecedores | undefined>;
    listarTelefoneFornecedor(telefoneFornecedor:number): Promise<fornecedores | undefined>;
    listarNumeroDeContribuinte(
        nif: string
    ): Promise<fornecedores | undefined>;
}