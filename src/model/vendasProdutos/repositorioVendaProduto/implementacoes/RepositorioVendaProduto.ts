import { vendasProdutos } from "@prisma/client";
import { DadosVendaProduto, IVendaProduto } from "../IVendaProduto";
import { prisma } from "../../../../prisma/client";

class VendaProdutoRepositorio implements IVendaProduto {
    async criarVendaProduto({id_produto, id_venda, quantidadeVendida}: DadosVendaProduto): Promise<vendasProdutos> {
        const criarVendaProduto = await prisma.vendasProdutos.create({ data: { id_produto, id_venda, quantidadeVendida } });
        return criarVendaProduto;
    }
    async listarTodasVendasProdutos(): Promise<vendasProdutos[]> {
        const listarTodasVendasProdutos = await prisma.vendasProdutos.findMany();
        return listarTodasVendasProdutos;
    }
}
export { VendaProdutoRepositorio };