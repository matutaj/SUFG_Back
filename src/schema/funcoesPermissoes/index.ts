import * as Yup from "yup";

const criarFuncaoPermissaoSchema = Yup.object().shape({
    id_permissao: Yup.string().required(),
    id_funcao: Yup.string().required(),
});
export { criarFuncaoPermissaoSchema };