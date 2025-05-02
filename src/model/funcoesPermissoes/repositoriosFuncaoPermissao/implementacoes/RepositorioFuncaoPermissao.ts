import { funcoesPermissoes } from "@prisma/client";
import { DadosFuncaoPermissao, IFuncaoPermissao } from "../IFuncaoPermissao";
import prisma from "../../../../prisma/client";

class FuncaoPermissaoRepositorio implements IFuncaoPermissao {
  async criarFuncaoPermissao({
    id_funcao,
    id_permissao,
  }: DadosFuncaoPermissao): Promise<funcoesPermissoes> {
    const criarFuncaoPermissao = await prisma.funcoesPermissoes.create({
      data: {
        id_funcao,
        id_permissao,
      },
    });
    return criarFuncaoPermissao;
  }
  async listarTodasFuncoesPermissoes(): Promise<funcoesPermissoes[]> {
    const listarTodasFuncoesPermissoes =
      await prisma.funcoesPermissoes.findMany();
    return listarTodasFuncoesPermissoes;
  }
  async listarUmaFuncaoPermissaoPeloId(
    id_funcao: string,
    id_permissao: string
  ): Promise<funcoesPermissoes | undefined> {
    const listarUmaFuncaoPermissaoPeloId =
      (await prisma.funcoesPermissoes.findFirst({
        where: { id_funcao, id_permissao },
      })) || undefined;
    return listarUmaFuncaoPermissaoPeloId;
  }
  async atualizarFuncaoPermissao({
    id_funcao,
    id_permissao,
    id,
  }: DadosFuncaoPermissao): Promise<funcoesPermissoes> {
    const atualizarFuncaoPermissao = await prisma.funcoesPermissoes.update({
      where: {
        id,
      },
      data: {
        id_funcao,
        id_permissao,
      },
    });
    return atualizarFuncaoPermissao;
  }
  async eliminarFuncaoPermissao(id: string): Promise<void> {
    await prisma.funcoesPermissoes.delete({ where: { id } });
  }
}
export { FuncaoPermissaoRepositorio };
