import { localizacoes } from "@prisma/client";

export interface DadosLocalizacao {
  id?: string;
  nomeLocalizacao: string;
  descricao?: string;
}
export interface ILocalizacao {
  criarLocalizacao({}: DadosLocalizacao): Promise<localizacoes>;
  listarTodosLocalizacoes(): Promise<localizacoes[]>;
  listarUmLocalizacaoPeloId(id: string): Promise<localizacoes | undefined>;
  listarUmLocalizacaoPeloNome(
    nomeLocalizacao: string
  ): Promise<localizacoes | undefined>;
  atualizarLocalizacao({}: DadosLocalizacao): Promise<localizacoes>;
  eliminarLocalizacao(id: string): Promise<void>;
}
