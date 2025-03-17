import { permissoes } from "@prisma/client";
import { PermissaoRepositorio } from "../../repositorioPermissao/implementacoes/RepositorioPermissao";

class ListarTodasPermissoesCasoDeUso {
    async execute(): Promise<permissoes[]> {
        const repositorioPermissao = new PermissaoRepositorio();
        const result = await repositorioPermissao.listarTodasPermissoes();
        return result;
    }
}
export { ListarTodasPermissoesCasoDeUso }