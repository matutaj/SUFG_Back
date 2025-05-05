import { permissoes } from "@prisma/client";

export interface DadosPermissao {
  id?: string;
  nome: string;
  descricao?: string;
}
export interface IPermissao {
  criarPermissao({}: DadosPermissao): Promise<permissoes>;
  listarTodasPermissoes(): Promise<permissoes[]>;
  listarUmaPermissaoPeloNome(nome: string): Promise<permissoes | undefined>;
  listarUmaPermissaoPorID(id: string): Promise<permissoes | undefined>;
  atualizarPermissao({}: DadosPermissao): Promise<permissoes>;
  eliminarPermissao(id: string): Promise<void>;
}
