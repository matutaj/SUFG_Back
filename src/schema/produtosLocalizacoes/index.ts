import * as Yup from "yup";

const criarProdutoLocalizacaoSchema = Yup.object().shape({
    id_localizacao: Yup.string().required(),
    id_produto: Yup.string().required(),
});
const listarProdutoLocalizacaoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarProdutoLocalizacaoSchema = Yup.object().shape({
    id: Yup.string().required(),
    id_localizacao: Yup.string().required(),
    id_produto: Yup.string().required(),
})
const deletarProdutoLocalizacaoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarProdutoLocalizacaoSchema, listarProdutoLocalizacaoPeloIdSchema, atualizarProdutoLocalizacaoSchema, deletarProdutoLocalizacaoSchema };