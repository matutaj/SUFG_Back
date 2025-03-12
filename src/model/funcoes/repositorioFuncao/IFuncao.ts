import { funcoes } from "@prisma/client";

export interface DadosFuncao {
    ID_funcao?: string;
    descricao: string;
    nome: string;
}
export interface IFuncao{
    criarFuncao({}: DadosFuncao): Promise<funcoes>;
    listarTodasFuncoes(): Promise<funcoes[]>;
    listarFuncaoPeloId(id: string): Promise<funcoes | undefined>;
    atualizarFuncao({}: DadosFuncao): Promise<funcoes>;
    eliminarFuncao(id: string): Promise<void>;
}