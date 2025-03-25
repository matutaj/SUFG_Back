import * as Yup from "yup";

const criarCategoriaProdutoSchema = Yup.object().shape({
    descricaoCategoria: Yup.string(),
    nomeCategoria: Yup.string().required(),
});
const listarCategoriaProdutoPeloNome = Yup.object().shape({
    nomeCategoria: Yup.string().required(),
})
const atualizarCategoriaProdutoSchema = Yup.object().shape({
    descricaoCategoria: Yup.string(),
    nomeCategoria: Yup.string().required(),
})
const deletarCategoriaProdutoSchema = Yup.object().shape({
    id_categoriaProduto: Yup.string().required(),
})
const listarCategoriaProdutoPeloIdSchema = Yup.object().shape({
    id_categoriaProduto: Yup.string().required(),
})
export { criarCategoriaProdutoSchema, listarCategoriaProdutoPeloNome, atualizarCategoriaProdutoSchema, deletarCategoriaProdutoSchema, listarCategoriaProdutoPeloIdSchema };