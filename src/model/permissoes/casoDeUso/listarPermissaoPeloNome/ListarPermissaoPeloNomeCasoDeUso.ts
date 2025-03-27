import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";
import { AppError } from "../../../../errors/AppError";

class ListarPermissaoPeloNomeCasoDeUso {
    async execute(nomePermissao: string): Promise<permissoes> {
        const permissoesRepositorio = new PermissaoRepositorio();
        const existeNomePermissao = await permissoesRepositorio.listarUmaPermissaoPeloNome(nomePermissao);
        if (!existeNomePermissao) {
            throw new AppError("Permissao não encontrada");
        }
        return existeNomePermissao;
    }
}
export { ListarPermissaoPeloNomeCasoDeUso }