import * as Yup from "yup";

const criarFuncaoPermissaoSchema = Yup.object().shape({
    id_permissao: Yup.string().required(),
    id_funcao: Yup.string().required(),
});
const listarFuncaoPermissaoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarFuncaoPermissaoSchema = Yup.object().shape({
    id: Yup.string().required(),
    id_permissao: Yup.string().required(),
    id_funcao: Yup.string().required(),
})
const deletarFuncaoPermissaoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarFuncaoPermissaoSchema, listarFuncaoPermissaoPeloIdSchema, atualizarFuncaoPermissaoSchema, deletarFuncaoPermissaoSchema };
