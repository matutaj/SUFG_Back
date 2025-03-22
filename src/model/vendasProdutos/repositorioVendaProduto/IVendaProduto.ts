import { vendasProdutos } from "@prisma/client";
export interface DadosVendaProduto {
    id?: string;
    id_venda: string;
    id_produto: string;
    quantidadeVendida: number;
}
export interface IVendaProduto{
    criarVendaProduto({}: DadosVendaProduto): Promise<vendasProdutos>;
    listarTodasVendasProdutos(): Promise<vendasProdutos[]>;
    listarVendaProdutoPorId(id: string): Promise<vendasProdutos | undefined>;
    atualizarVendaProduto({}: DadosVendaProduto): Promise<vendasProdutos>;
    eliminarVendaProduto(id: string): Promise<vendasProdutos>;
}
