import * as Yup from "yup";

const criarProdutoLocalizacaoSchema = Yup.object().shape({
    id_localizacao: Yup.string(),
    id_produto: Yup.string(),
});
export { criarProdutoLocalizacaoSchema };