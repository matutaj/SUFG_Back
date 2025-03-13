import { alertas } from "@prisma/client";
import { DadosAlerta, IAlerta } from "../IAlerta";
import { prisma } from "../../../../prisma/client";
class AlertaRepositorio implements IAlerta {
    async criarAlerta({descricaoAlerta, nomeAlerta}: DadosAlerta): Promise<alertas> {
        const criarAlerta = await prisma.alertas.create({ 
            data: {
                descricaoAlerta,
                nomeAlerta,
                caixas: {
                    connect: {
                       
                    }
                },
                produtos: {
                    connect: {
                        
                    }
                }
            }

        });
        return criarAlerta;
    }
    async listarTodosAlertas(): Promise<alertas[]> {
        const listarTodasAlertas = await prisma.alertas.findMany();
        return listarTodasAlertas;
    }
    async listarUmAlertaPeloId(id: string): Promise<alertas | undefined> {
        const listarUmAlertaPeloId = await prisma.alertas.findUnique({ where: { ID_alerta:id } }) || undefined
        return listarUmAlertaPeloId;
    }
    async listarUmAlertaPeloNome(nomeAlerta: string): Promise<alertas | undefined> {
        const listarUmAlertaPeloNome = await prisma.alertas.findFirst({ where: { nomeAlerta } }) || undefined
        return listarUmAlertaPeloNome;
    }
    async eliminarAlerta(id: string): Promise<void> {
        await prisma.alertas.delete({ where: { ID_alerta: id } });
    }
    async atualizarAlerta({descricaoAlerta, nomeAlerta, ID_alerta}: DadosAlerta): Promise<alertas> {
        const atualizarAlerta = await prisma.alertas.update({ where: { ID_alerta }, data: { descricaoAlerta, nomeAlerta } });
        return atualizarAlerta;
    }
     

}
export {AlertaRepositorio}
