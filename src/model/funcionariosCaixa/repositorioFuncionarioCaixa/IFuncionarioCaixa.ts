import { funcionariosCaixa } from "@prisma/client";
export enum EstadoCaixa {
    ABERTO = "ABERTO",
    FECHADO = "FECHADO",  
}
export interface DadosFuncionarioCaixa {
    ID_funcionarioCaixa: string;
    ID_caixa: string;
    ID_funcionario: string;
    estadoCaixa: EstadoCaixa;
    quantidadaFaturada: number;
    horarioAbertura: Date;
    horarioFechamento: Date;
}

export interface IFuncionarioCaixa {
    criarFuncionarioCaixa(dadosFuncionarioCaixa: DadosFuncionarioCaixa): Promise<funcionariosCaixa>;
    listarTodosFuncionariosCaixa(): Promise<funcionariosCaixa[]>;
    listarUmFuncionarioCaixaPeloId(id: string): Promise<funcionariosCaixa | undefined>;   
}   
