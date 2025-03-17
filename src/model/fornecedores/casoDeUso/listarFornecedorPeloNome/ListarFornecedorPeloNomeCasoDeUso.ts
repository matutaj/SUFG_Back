import { fornecedores } from "@prisma/client";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";

class ListarFornecedorPeloNomeCasoDeUso {
    async execute (nomeFornecedor: string): Promise<fornecedores> {
        const fornecedorRepositorio = new FornecedorRepositorio();
        const existeNomeFornecedor = await fornecedorRepositorio.listarUmFornecedorPeloNome(nomeFornecedor);
        if (!existeNomeFornecedor) {
            throw new Error("Fornecedor não encontrado");
        }
        return existeNomeFornecedor;
    }
}
export { ListarFornecedorPeloNomeCasoDeUso }