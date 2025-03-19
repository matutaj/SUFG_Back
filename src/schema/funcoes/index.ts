import * as Yup from "yup";

const criarFuncaoSchema = Yup.object().shape({
    descricaoFuncao: Yup.string(),
    nomeFuncao: Yup.string(),
});
const listarFuncaoPeloNome = Yup.object().shape({
    nomeFuncao: Yup.string().required(),
});
export { criarFuncaoSchema, listarFuncaoPeloNome };