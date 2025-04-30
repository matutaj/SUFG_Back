import { localizacoes } from "@prisma/client";
import prisma from "../../../../prisma/client";
import { DadosLocalizacao, ILocalizacao } from "../ILocalizacao";

class LocalizacaoRepositorio implements ILocalizacao {
  async criarLocalizacao({
    nomeLocalizacao,
    descricao,
  }: DadosLocalizacao): Promise<localizacoes> {
    const localizacao = await prisma.localizacoes.create({
      data: {
        nomeLocalizacao,
        descricao,
      },
    });
    return localizacao;
  }

  async listarTodosLocalizacoes(): Promise<localizacoes[]> {
    const listarTodosLocalizacoes = await prisma.localizacoes.findMany();
    return listarTodosLocalizacoes;
  }

  async listarUmLocalizacaoPeloId(
    id: string
  ): Promise<localizacoes | undefined> {
    const listarUmLocalizacaoPeloId =
      (await prisma.localizacoes.findUnique({ where: { id } })) || undefined;
    return listarUmLocalizacaoPeloId;
  }

  async listarUmLocalizacaoPeloNome(
    nomeLocalizacao: string
  ): Promise<localizacoes | undefined> {
    const listarUmLocalizacaoPeloNome =
      (await prisma.localizacoes.findFirst({ where: { nomeLocalizacao } })) ||
      undefined;
    return listarUmLocalizacaoPeloNome;
  }

  async atualizarLocalizacao({
    id,
    nomeLocalizacao,
    descricao,
  }: DadosLocalizacao): Promise<localizacoes> {
    const atualizarLocalizacao = await prisma.localizacoes.update({
      where: { id },
      data: {
        nomeLocalizacao,
        descricao,
      },
    });
    return atualizarLocalizacao;
  }

  async eliminarLocalizacao(id: string): Promise<void> {
    await prisma.localizacoes.delete({ where: { id } });
  }
}
export { LocalizacaoRepositorio };
