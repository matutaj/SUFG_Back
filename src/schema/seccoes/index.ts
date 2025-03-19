import * as Yup from "yup";

const criarSeccaoSchema = Yup.object().shape({
    descricaoSeccao: Yup.string(),
    nomeSeccao: Yup.string().required(),
});
const listarSeccaoPeloNome = Yup.object().shape({
    nomeSeccao: Yup.string().required(),
});
export { criarSeccaoSchema, listarSeccaoPeloNome };
