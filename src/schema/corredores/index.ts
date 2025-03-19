import * as Yup from "yup";

const criarCorredorSchema = Yup.object().shape({
    descricaoCorredor: Yup.string(),
    nomeCorredor: Yup.string(),
});
const listarCorredorPeloNome = Yup.object().shape({
    nomeCorredor: Yup.string().required(),
});
export { criarCorredorSchema, listarCorredorPeloNome };