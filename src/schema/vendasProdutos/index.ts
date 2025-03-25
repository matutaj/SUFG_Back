import * as Yup from "yup";

const criarVendaProdutoSchema = Yup.object().shape({
    id_venda: Yup.string().required(),
    id_produto: Yup.string().required(),
    quantidadeProduto: Yup.number().required(),
});
const listarVendaProdutoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarVendaProdutoSchema = Yup.object().shape({
    id_venda: Yup.string().required(),
    id_produto: Yup.string().required(),
    quantidadeProduto: Yup.number().required(),
})
const deletarVendaProdutoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarVendaProdutoSchema, listarVendaProdutoPeloIdSchema, atualizarVendaProdutoSchema, deletarVendaProdutoSchema };
