import { permissoes } from "@prisma/client";
import { DadosPermissao } from "../../repositorioPermissao/IPermissao";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";

class AtualizarPermissaoCasoDeUso {
  async execute({
    id,
    nome,
    descricao,
  }: DadosPermissao): Promise<permissoes> {
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new Error("O ID da permissão é obrigatório para atualização");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id);
    if (!existePermissao) {
      throw new Error("Não existe uma permissão com esse id");
    }

    const permissaoComMesmoNome = await repositorioPermissao.listarUmaPermissaoPeloNome(nome);
    if (permissaoComMesmoNome && permissaoComMesmoNome.id !== id) {
      throw new Error("Já existe uma permissão com esse nome");
    }

    const result = await repositorioPermissao.atualizarPermissao({
      id,
      nome,
      descricao,
    });

    return result;
  }
}

export { AtualizarPermissaoCasoDeUso };