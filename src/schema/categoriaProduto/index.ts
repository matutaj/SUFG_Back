import * as Yup from "yup";

const criarCategoriaProdutoSchema = Yup.object().shape({
    descricaoCategoria: Yup.string(),
    nomeCategoria: Yup.string().required(),
});
const listarCategoriaProdutoPeloNome = Yup.object().shape({
    nomeCategoria: Yup.string().required(),
})
export { criarCategoriaProdutoSchema, listarCategoriaProdutoPeloNome};