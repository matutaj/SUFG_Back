import { fornecedores } from "@prisma/client";
import { DadosFornecedor, IFornecedor } from "../IFornecedor";
import { prisma } from "../../../../prisma/client";

class FornecedorRepositorio implements IFornecedor {
    async criarFornecedor({emailFornecedor, moradaFornecedor, nif, nomeFornecedor, telefoneFornecedor }: DadosFornecedor): Promise<fornecedores> {
        const criarFornecedor = await prisma.fornecedores.create({ data: { emailFornecedor, moradaFornecedor, nif, nomeFornecedor, telefoneFornecedor } });
        return criarFornecedor;    
    }
    async listarTodosFornecedores(): Promise<fornecedores[]> {
        const listarTodosFornecedores = await prisma.fornecedores.findMany();
        return listarTodosFornecedores;
    }
    async listarUmFornecedorPeloId(id: string): Promise<fornecedores | undefined> {
        const listarUmFornecedorPeloId = await prisma.fornecedores.findUnique({ where: { ID_fornecedor: id } }) || undefined
        return listarUmFornecedorPeloId;
    }
    async listarUmFornecedorPeloNome(nomeFornecedor: string): Promise<fornecedores | undefined> {
        const listarUmFornecedorPeloNome = await prisma.fornecedores.findFirst({ where: { nomeFornecedor } }) || undefined
        return listarUmFornecedorPeloNome;
    }
    async atualizarFornecedor({ID_fornecedor, emailFornecedor, moradaFornecedor, nif, nomeFornecedor, telefoneFornecedor }: DadosFornecedor): Promise<fornecedores> {
        const atualizarFornecedor = await prisma.fornecedores.update({ where: { ID_fornecedor }, data: { emailFornecedor, moradaFornecedor, nif, nomeFornecedor, telefoneFornecedor } });
        return atualizarFornecedor;
    }
    async eliminarFornecedor(id: string): Promise<void> {
        
    }
    async listarEmailFornecedor(emailFornecedor: string): Promise<fornecedores | undefined> {
        const listarEmailFornecedor =
        (await prisma.fornecedores.findFirst({ where: { emailFornecedor } })) ||
        undefined;
        return listarEmailFornecedor;
    }
    async listarTelefoneFornecedor(telefoneFornecedor: number): Promise<fornecedores | undefined> {
        const listarTelefoneFornecedor =
            (await prisma.fornecedores.findFirst({ where: { telefoneFornecedor } })) ||
            undefined;
        return listarTelefoneFornecedor;
    }
    async listarNumeroDeContribuinte(nif: string): Promise<fornecedores | undefined> {
        const listarNumeroDeContribuinte =
            (await prisma.fornecedores.findFirst({ where: { nif } })) ||
            undefined;
        return listarNumeroDeContribuinte;
        
    }
}
export { FornecedorRepositorio };