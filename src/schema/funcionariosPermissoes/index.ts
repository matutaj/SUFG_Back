import * as Yup from "yup";

const criarFuncionarioPermissaoSchema = Yup.object().shape({
    id_permissao: Yup.string().required(),
    id_funcionario: Yup.string().required(),
});
const listarFuncionarioPermissaoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarFuncionarioPermissaoSchema = Yup.object().shape({
    id: Yup.string().required(),
    id_permissao: Yup.string().required(),
    id_funcionario: Yup.string().required(),
})
const deletarFuncionarioPermissaoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarFuncionarioPermissaoSchema, listarFuncionarioPermissaoPeloIdSchema, atualizarFuncionarioPermissaoSchema, deletarFuncionarioPermissaoSchema };
