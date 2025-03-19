import * as Yup from "yup";

const criarPrateleiraSchema = Yup.object().shape({
    descricaoPrateleira: Yup.string(),
    nomePrateleira: Yup.string().required(),
});
const listarPrateleiraPeloNome = Yup.object().shape({
    nomePrateleira: Yup.string().required(),
});
export { criarPrateleiraSchema, listarPrateleiraPeloNome };