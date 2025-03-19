import * as Yup from "yup";

const criarFuncionarioFuncaoSchema = Yup.object().shape({
    id_funcao: Yup.string().required(),
    id_funcionario: Yup.string().required(),
});
export { criarFuncionarioFuncaoSchema };