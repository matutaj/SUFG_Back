import { funcionariosCaixa, estadoCaixa } from "@prisma/client";

export interface DadosFuncionarioCaixa {
    id?: string;
    id_caixa: string;
    id_funcionario: string;
    estadoCaixa: estadoCaixa;
    quantidadaFaturada: number;
    horarioAbertura: Date;
    horarioFechamento: Date;
}

export interface IFuncionarioCaixa {
    criarFuncionarioCaixa(dadosFuncionarioCaixa: DadosFuncionarioCaixa): Promise<funcionariosCaixa>;
    listarTodosFuncionariosCaixa(): Promise<funcionariosCaixa[]>;
    listarUmFuncionarioCaixaPelaAbertura(horarioAbertura:Date):Promise<funcionariosCaixa | undefined> 
    listarUmFuncionarioCaixaPeloId(id: string): Promise<funcionariosCaixa | undefined>;   
}   
