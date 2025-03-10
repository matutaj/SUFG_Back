import { corredores } from "@prisma/client";

export interface DadosCorredor {
    ID_corredor?: string;
    nomeCorredor: string;
    descricaoCorredor: string;
}
export interface ICorredor {
    listarTodosCorredores(): Promise<corredores[]>;
    listarUmCorredorPeloId(id: string): Promise<corredores | undefined>;
    listarUmCorredorPeloNome(nomeCorredor: string): Promise<corredores | undefined>;
    criarCorredor({}: DadosCorredor): Promise<corredores>;
    atualizarCorredor({}: DadosCorredor): Promise<corredores>;
    eliminarCorredor(id: string): Promise<void>;
}