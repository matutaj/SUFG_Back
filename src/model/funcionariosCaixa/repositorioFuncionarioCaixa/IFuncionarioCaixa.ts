import { funcionariosCaixa } from "@prisma/client";

export interface DadosFuncionarioCaixa {
  id?: string;
  id_caixa: string;
  id_funcionario: string;
  estadoCaixa: boolean;
  quantidadaFaturada: number;
  valorInicial: number;
  horarioAbertura: Date;
  horarioFechamento: Date | null;
}

export interface IFuncionarioCaixa {
  criarFuncionarioCaixa(
    dadosFuncionarioCaixa: DadosFuncionarioCaixa
  ): Promise<funcionariosCaixa>;
  listarTodosFuncionariosCaixa(): Promise<funcionariosCaixa[]>;
  listarEstadoCaixa(id_caixa: string): Promise<funcionariosCaixa | undefined>;
  listarUmFuncionarioCaixaPelaAbertura(
    horarioAbertura: Date
  ): Promise<funcionariosCaixa | undefined>;
  listarUmFuncionarioCaixaPeloId(
    id: string
  ): Promise<funcionariosCaixa | undefined>;
  eliminarFuncionarioCaixa(id: string): Promise<void>;
  atualizarFuncionarioCaixa(dadosFuncionarioCaixa: DadosFuncionarioCaixa): Promise<funcionariosCaixa>;
}
