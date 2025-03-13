import { alertas } from "@prisma/client"
export interface DadosAlerta{
    ID_alerta?: string
    descricaoAlerta: string
    nomeAlerta: string
    caixas: string
    produtos: string
}

export interface IAlerta{
    criarAlerta({}: DadosAlerta): Promise<alertas>
    listarTodosAlertas(): Promise<alertas[]>
    listarUmAlertaPeloId(id: string): Promise<alertas | undefined>
    listarUmAlertaPeloNome(nomeAlerta: string): Promise<alertas | undefined>
    atualizarAlerta({}: DadosAlerta): Promise<alertas>
    eliminarAlerta(id: string): Promise<void>
}