import { permissoes } from "@prisma/client";

export interface DadosPermissao {
    id?: string;
    nome: string;
    descricao: string;
}
export interface IPermissao {
    criarPermissao({}: DadosPermissao): Promise<permissoes>;
    listarTodasPermissoes(): Promise<permissoes[]>;
    listarUmaPermissaoPeloNome(nomePermissao: string): Promise<permissoes | undefined>;
    listarUmaPermissaoPorID(id_permissao: string): Promise<permissoes | undefined>;
    atualizarPermissao({}: DadosPermissao): Promise<permissoes>;
    eliminarPermissao(id_permissao: string): Promise<void>;
}