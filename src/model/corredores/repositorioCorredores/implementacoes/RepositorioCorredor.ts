import { corredores } from "@prisma/client";
import { DadosCorredor, ICorredor } from "../ICorredor";
import { prisma } from "../../../../prisma/client";

class CorredorRepositorio implements ICorredor {
    async criarCorredor({descricaoCorredor, nomeCorredor }: DadosCorredor): Promise<corredores> {
       const corredor = await prisma.corredores.create({ data: {descricaoCorredor, nomeCorredor} });
       return corredor 
    }

    async listarTodosCorredores(): Promise<corredores[]> {
        const corredores = await prisma.corredores.findMany();    
        return corredores;
    }

    async listarUmCorredorPeloId(id: string): Promise<corredores | undefined> {
        const listarUmCorredorPeloId = await prisma.corredores.findUnique({ where: { ID_corredor: id } }) || undefined
        return listarUmCorredorPeloId;
    }

    async listarUmCorredorPeloNome(nomeCorredor: string): Promise<corredores | undefined> {
        const listarUmCorredorPeloNome = await prisma.corredores.findFirst({ where: { nomeCorredor } }) || undefined
        return listarUmCorredorPeloNome;
    }

    async atualizarCorredor({ID_corredor, descricaoCorredor, nomeCorredor }: DadosCorredor): Promise<corredores> {
        const corredor = await prisma.corredores.update({ where: { ID_corredor }, data: {descricaoCorredor, nomeCorredor} });
        return corredor;
    }

    async eliminarCorredor(id: string): Promise<void> {
        await prisma.corredores.delete({ where: { ID_corredor: id } });
    }
    
}
export { CorredorRepositorio }