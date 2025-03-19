import * as Yup from "yup";

const criarProdutoSchema = Yup.object().shape({
    id_categoriaProduto: Yup.string(),
    referenciaProduto: Yup.string(),
    nomeProduto: Yup.string(),
    descricaoProduto: Yup.string(),
    custoAquisicao: Yup.string(),
    precoVenda: Yup.number(),
    quantidadeEstoque: Yup.number(),
    unidadeMedida: Yup.string(),
    codigoBarras: Yup.string(),
    unidadeConteudo: Yup.string(),
});
const listarProdutoPeloNome = Yup.object().shape({
    nomeProduto: Yup.string().required(),
});
const listarProdutoPelaReferencia = Yup.object().shape({
    referenciaProduto: Yup.string().required(),
});
const listarProdutoPeloCodigoBarras = Yup.object().shape({
    codigoBarras: Yup.string().required(),
})
export { criarProdutoSchema, listarProdutoPeloNome, listarProdutoPelaReferencia, listarProdutoPeloCodigoBarras };
