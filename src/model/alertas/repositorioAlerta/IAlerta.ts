import { alertas } from "@prisma/client"
export interface DadosAlerta{
    id?: string
    id_caixa: string
    id_produto: string
    descricaoAlerta: string
    nomeAlerta: string
}

export interface IAlerta{
    criarAlerta({}: DadosAlerta): Promise<alertas>
    listarTodosAlertas(): Promise<alertas[]>
    listarUmAlertaPeloId(id: string): Promise<alertas | undefined>
    listarUmAlertaPeloNome(nomeAlerta: string): Promise<alertas | undefined>
    atualizarAlerta({}: DadosAlerta): Promise<alertas>
    eliminarAlerta(id: string): Promise<void>
}