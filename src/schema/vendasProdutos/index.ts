import * as Yup from "yup";

const criarVendaProdutoSchema = Yup.object().shape({
    id_venda: Yup.string().required(),
    id_produto: Yup.string().required(),
    quantidadeProduto: Yup.number().required(),
});
export { criarVendaProdutoSchema };