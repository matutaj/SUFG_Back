import { funcoes } from "@prisma/client";

export interface DadosFuncao {
  id?: string;
  descricao: string;
  nome: string;
}
export interface IFuncao {
  criarFuncao({}: DadosFuncao): Promise<funcoes>;
  listarTodasFuncoes(): Promise<funcoes[]>;
  listarFuncaoPeloNome(nomeFuncao: string): Promise<funcoes | undefined>;
  listarFuncaoPeloId(id: string): Promise<funcoes | undefined>;
  atualizarFuncao({}: DadosFuncao): Promise<funcoes>;
  eliminarFuncao(id: string): Promise<void>;
}
