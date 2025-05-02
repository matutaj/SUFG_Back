import { prateleiras } from "@prisma/client";
import { DadosPrateleira, IPrateleira } from "../IPrateleira";
import  prisma  from "../../../../prisma/client";

class PrateleiraRepositorio implements IPrateleira {
  async criarPrateleira({
    descricao,
    nomePrateleira,
  }: DadosPrateleira): Promise<prateleiras> {
    const prateleira = await prisma.prateleiras.create({
      data: {
        descricao,
        nomePrateleira,
      },
    });
    return prateleira;
  }

  async listarTodasPrateleiras(): Promise<prateleiras[]> {
    const listarTodasPrateleiras = await prisma.prateleiras.findMany();
    return listarTodasPrateleiras;
  }

  async listarUmaPrateleiraPeloId(
    id: string
  ): Promise<prateleiras | undefined> {
    const listarUmaPrateleiraPeloId =
      (await prisma.prateleiras.findUnique({ where: { id } })) || undefined;
    return listarUmaPrateleiraPeloId;
  }

  async listarUmaPrateleiraPeloNome(
    nomePrateleira: string
  ): Promise<prateleiras | undefined> {
    const listarUmaPrateleiraPeloNome =
      (await prisma.prateleiras.findFirst({ where: { nomePrateleira } })) ||
      undefined;
    return listarUmaPrateleiraPeloNome;
  }

  async atualizarPrateleira({
    id,
    descricao,
    nomePrateleira,
  }: DadosPrateleira): Promise<prateleiras> {
    const atualizarPrateleira = await prisma.prateleiras.update({
      where: { id },
      data: {
        descricao,
        nomePrateleira,
      },
    });
    return atualizarPrateleira;
  }

  async eliminarPrateleira(id: string): Promise<void> {
    await prisma.prateleiras.delete({ where: { id } });
  }
}
export { PrateleiraRepositorio };
