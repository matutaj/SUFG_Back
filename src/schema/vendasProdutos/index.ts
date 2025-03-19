import * as Yup from "yup";

const criarVendaProdutoSchema = Yup.object().shape({
    id_venda: Yup.string(),
    id_produto: Yup.string(),
    quantidadeProduto: Yup.number(),
});
export { criarVendaProdutoSchema };