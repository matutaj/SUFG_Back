import * as Yup from "yup";

const criarFuncaoSchema = Yup.object().shape({
    descricaoFuncao: Yup.string(),
    nomeFuncao: Yup.string().required(),
});
const listarFuncaoPeloNome = Yup.object().shape({
    nomeFuncao: Yup.string().required(),
});
const atualizarFuncaoSchema = Yup.object().shape({
    descricaoFuncao: Yup.string(),
    nomeFuncao: Yup.string().required(),
})
const deletarFuncaoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const listarFuncaoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarFuncaoSchema, listarFuncaoPeloNome, atualizarFuncaoSchema, deletarFuncaoSchema, listarFuncaoPeloIdSchema };