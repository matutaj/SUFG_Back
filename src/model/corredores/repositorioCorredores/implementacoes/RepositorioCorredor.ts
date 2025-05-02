import { corredores } from "@prisma/client";
import { DadosCorredor, ICorredor } from "../ICorredor";
import  prisma  from "../../../../prisma/client";

class CorredorRepositorio implements ICorredor {
  async criarCorredor({
    descricao,
    nomeCorredor,
  }: DadosCorredor): Promise<corredores> {
    const corredor = await prisma.corredores.create({
      data: { descricao, nomeCorredor },
    });
    return corredor;
  }

  async listarTodosCorredores(): Promise<corredores[]> {
    const corredores = await prisma.corredores.findMany();
    return corredores;
  }

  async listarUmCorredorPeloId(id: string): Promise<corredores | undefined> {
    const listarUmCorredorPeloId =
      (await prisma.corredores.findUnique({ where: { id } })) || undefined;
    return listarUmCorredorPeloId;
  }

  async listarUmCorredorPeloNome(
    nomeCorredor: string
  ): Promise<corredores | undefined> {
    const listarUmCorredorPeloNome =
      (await prisma.corredores.findFirst({ where: { nomeCorredor } })) ||
      undefined;
    return listarUmCorredorPeloNome;
  }

  async atualizarCorredor({
    id,
    descricao,
    nomeCorredor,
  }: DadosCorredor): Promise<corredores> {
    const corredor = await prisma.corredores.update({
      where: { id },
      data: { descricao, nomeCorredor },
    });
    return corredor;
  }

  async eliminarCorredor(id: string): Promise<void> {
    await prisma.corredores.delete({ where: { id } });
  }
}
export { CorredorRepositorio };
