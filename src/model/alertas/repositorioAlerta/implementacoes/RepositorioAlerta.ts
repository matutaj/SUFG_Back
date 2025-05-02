import { alertas } from "@prisma/client";
import { DadosAlerta, IAlerta } from "../IAlerta";
import prisma from "../../../../prisma/client";
class AlertaRepositorio implements IAlerta {
  async criarAlerta({
    descricao,
    nomeAlerta,
    id_caixa,
    id_produto,
  }: DadosAlerta): Promise<alertas> {
    const criarAlerta = await prisma.alertas.create({
      data: {
        descricao,
        nomeAlerta,
        id_caixa,
        id_produto,
      },
    });
    return criarAlerta;
  }
  async listarTodosAlertas(): Promise<alertas[]> {
    const listarTodasAlertas = await prisma.alertas.findMany();
    return listarTodasAlertas;
  }
  async listarUmAlertaPeloId(id: string): Promise<alertas | undefined> {
    const listarUmAlertaPeloId =
      (await prisma.alertas.findUnique({ where: { id } })) || undefined;
    return listarUmAlertaPeloId;
  }
  async listarUmAlertaPeloNome(
    nomeAlerta: string
  ): Promise<alertas | undefined> {
    const listarUmAlertaPeloNome =
      (await prisma.alertas.findFirst({ where: { nomeAlerta } })) || undefined;
    return listarUmAlertaPeloNome;
  }
  async eliminarAlerta(id: string): Promise<void> {
    await prisma.alertas.delete({ where: { id } });
  }
  async atualizarAlerta({
    descricao,
    nomeAlerta,
    id,
  }: DadosAlerta): Promise<alertas> {
    const atualizarAlerta = await prisma.alertas.update({
      where: { id },
      data: { descricao, nomeAlerta },
    });
    return atualizarAlerta;
  }
}
export { AlertaRepositorio };
