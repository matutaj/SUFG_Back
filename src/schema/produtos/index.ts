import * as Yup from "yup";

const criarProdutoSchema = Yup.object().shape({
    id_categoriaProduto: Yup.string().required(),
    referenciaProduto: Yup.string(),
    nomeProduto: Yup.string().required(),
    descricaoProduto: Yup.string(),
    custoAquisicao: Yup.string(),
    precoVenda: Yup.number().required(),
    quantidadeEstoque: Yup.number(),
    unidadeMedida: Yup.string(),
    codigoBarras: Yup.string(),
    unidadeConteudo: Yup.string(),
});
const listarProdutoPeloNome = Yup.object().shape({
    nomeProduto: Yup.string().required(),
});
const atualizarProdutoSchema = Yup.object().shape({
    id_categoriaProduto: Yup.string().required(),
    referenciaProduto: Yup.string().required(),
    nomeProduto: Yup.string().required(),
    descricaoProduto: Yup.string(),
    custoAquisicao: Yup.string().required(),
    precoVenda: Yup.number().required(),
    quantidadeEstoque: Yup.number().required(),
    unidadeMedida: Yup.string().required(),
    codigoBarras: Yup.string().required(),
    unidadeConteudo: Yup.string().required(),
})
const deletarProdutoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const listarProdutoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})

export { criarProdutoSchema, listarProdutoPeloNome, atualizarProdutoSchema, deletarProdutoSchema, listarProdutoPeloIdSchema };
