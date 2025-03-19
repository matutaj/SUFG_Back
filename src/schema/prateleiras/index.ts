import * as Yup from "yup";

const criarPrateleiraSchema = Yup.object().shape({
    descricaoPrateleira: Yup.string(),
    nomePrateleira: Yup.string(),
});
const listarPrateleiraPeloNome = Yup.object().shape({
    nomePrateleira: Yup.string().required(),
});
export { criarPrateleiraSchema, listarPrateleiraPeloNome };