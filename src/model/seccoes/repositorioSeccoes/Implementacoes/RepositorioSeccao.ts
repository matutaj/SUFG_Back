import { seccoes } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosSeccao, ISeccao } from "../ISeccao";

class SeccaoRepositorio implements ISeccao {
  async criarSeccao({ nomeSeccao, descricao }: DadosSeccao): Promise<seccoes> {
    const criarSeccao = await prisma.seccoes.create({
      data: { nomeSeccao, descricao },
    });
    return criarSeccao;
  }

  async listarTodasSeccoes(): Promise<seccoes[]> {
    const listarTodasSeccoes = await prisma.seccoes.findMany();
    return listarTodasSeccoes;
  }

  async listarUmaSeccaoPeloId(id: string): Promise<seccoes | undefined> {
    const listarUmSeccaoPeloId =
      (await prisma.seccoes.findUnique({ where: { id } })) || undefined;
    return listarUmSeccaoPeloId;
  }

  async listarUmaSeccaoPeloNome(
    nomeSeccao: string
  ): Promise<seccoes | undefined> {
    const listarUmSeccaoPeloNome =
      (await prisma.seccoes.findFirst({ where: { nomeSeccao } })) || undefined;
    return listarUmSeccaoPeloNome;
  }

  async atualizarSeccao({
    id,
    nomeSeccao,
    descricao,
  }: DadosSeccao): Promise<seccoes> {
    const atualizarSeccao = await prisma.seccoes.update({
      where: { id },
      data: { nomeSeccao, descricao },
    });
    return atualizarSeccao;
  }

  async eliminarSeccao(id: string): Promise<void> {
    await prisma.seccoes.delete({ where: { id } });
  }
}
export { SeccaoRepositorio };
