import { caixas } from "@prisma/client";
import { DadosCaixa, ICaixa } from "../ICaixa";
import { prisma } from "../../../../prisma/client";

class CaixaRepositorio implements ICaixa {
  async criarCaixa({ descricao, nomeCaixa }: DadosCaixa): Promise<caixas> {
    const criarCaixa = await prisma.caixas.create({
      data: {
        descricao,
        nomeCaixa,
      },
    });
    return criarCaixa;
  }
  async listarTodosCaixas(): Promise<caixas[]> {
    const listarTodosCaixas = await prisma.caixas.findMany();
    return listarTodosCaixas;
  }
  async listarUmCaixaPeloId(id: string): Promise<caixas | undefined> {
    const listarUmCaixaPeloId =
      (await prisma.caixas.findUnique({ where: { id } })) || undefined;
    return listarUmCaixaPeloId;
  }
  async listarUmCaixaPeloNome(nomeCaixa: string): Promise<caixas | undefined> {
    const listarUmCaixaPeloNome =
      (await prisma.caixas.findFirst({ where: { nomeCaixa } })) || undefined;
    return listarUmCaixaPeloNome;
  }
  async atualizarCaixa({
    descricao,
    nomeCaixa,
    id,
  }: DadosCaixa): Promise<caixas> {
    const atualizarCaixa = await prisma.caixas.update({
      where: { id },
      data: {
        descricao,
        nomeCaixa,
      },
    });
    return atualizarCaixa;
  }
  async eliminarCaixa(id: string): Promise<void> {
    await prisma.caixas.delete({ where: { id } });
  }
}
export { CaixaRepositorio };
