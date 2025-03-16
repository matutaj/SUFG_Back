import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";

class ListarPermissaoPeloNomeCasoDeUso {
    async execute(nomePermissao: string): Promise<permissoes> {
        const permissoesRepositorio = new PermissaoRepositorio();
        const existeNomePermissao = await permissoesRepositorio.listarUmaPermissaoPeloNome(nomePermissao);
        if (!existeNomePermissao) {
            throw new Error("Permissao não encontrada");
        }
        return existeNomePermissao;
    }
}
export { ListarPermissaoPeloNomeCasoDeUso }