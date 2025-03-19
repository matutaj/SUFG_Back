import * as Yup from "yup";

const criarFuncionarioPermissaoSchema = Yup.object().shape({
    id_permissao: Yup.string().required(),
    id_funcionario: Yup.string().required(),
});
export { criarFuncionarioPermissaoSchema };