import { seccoes } from "@prisma/client";

export interface DadosSeccao {
    id?: string;
    nomeSeccao: string;
    descricaoSeccao: string;
}

export interface ISeccao {
    criarSeccao({nomeSeccao, descricaoSeccao}: DadosSeccao): Promise<seccoes>;
    listarTodasSeccoes(): Promise<seccoes[]>;
    listarUmaSeccaoPeloId(id: string): Promise<seccoes | undefined>;
    listarUmaSeccaoPeloNome(nomeSeccao: string): Promise<seccoes | undefined>;
    atualizarSeccao({id, nomeSeccao, descricaoSeccao}: DadosSeccao): Promise<seccoes>;
    eliminarSeccao(id: string): Promise<void>;
}