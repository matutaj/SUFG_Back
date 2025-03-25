import { seccoes } from "@prisma/client";

export interface DadosSeccao {
  id?: string;
  nomeSeccao: string;
  descricao?: string;
}

export interface ISeccao {
  criarSeccao({ nomeSeccao, descricao }: DadosSeccao): Promise<seccoes>;
  listarTodasSeccoes(): Promise<seccoes[]>;
  listarUmaSeccaoPeloId(id: string): Promise<seccoes | undefined>;
  listarUmaSeccaoPeloNome(nomeSeccao: string): Promise<seccoes | undefined>;
  atualizarSeccao({ id, nomeSeccao, descricao }: DadosSeccao): Promise<seccoes>;
  eliminarSeccao(id: string): Promise<void>;
}
