import * as Yup from "yup";

const criarCorredorSchema = Yup.object().shape({
    descricaoEntrada: Yup.string(),
    nomeEntrada: Yup.string(),
});
const listarCorredorPeloNome = Yup.object().shape({
    nomeEntrada: Yup.string().required(),
})
export { criarCorredorSchema, listarCorredorPeloNome };