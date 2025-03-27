import { permissoes } from "@prisma/client";
import { DadosPermissao } from "../../repositorioPermissao/IPermissao";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";
import { AppError } from "../../../../errors/AppError";

class CriarPermissaoCasoDeUso {
    async execute({descricao, nome}: DadosPermissao): Promise<permissoes> {
        const repositorioPermissao = new PermissaoRepositorio();
        const existeNome = await repositorioPermissao.listarUmaPermissaoPeloNome(nome);
        if (existeNome) {
            throw new AppError("Já existe uma permissao com esse nome");
        }
        const result = await repositorioPermissao.criarPermissao({descricao, nome})
        return result;
    }
}
export {CriarPermissaoCasoDeUso}