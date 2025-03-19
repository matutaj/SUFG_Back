import * as Yup from "yup";

const criarProdutoLocalizacaoSchema = Yup.object().shape({
    id_localizacao: Yup.string().required(),
    id_produto: Yup.string().required(),
});
export { criarProdutoLocalizacaoSchema };