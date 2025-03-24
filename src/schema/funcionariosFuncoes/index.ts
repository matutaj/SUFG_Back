import * as Yup from "yup";

const criarFuncionarioFuncaoSchema = Yup.object().shape({
    id_funcao: Yup.string().required(),
    id_funcionario: Yup.string().required(),
});
const listarFuncionarioFuncaoPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarFuncionarioFuncaoSchema = Yup.object().shape({
    id: Yup.string().required(),
    id_funcao: Yup.string().required(),
    id_funcionario: Yup.string().required(),
})
const deletarFuncionarioFuncaoSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarFuncionarioFuncaoSchema, listarFuncionarioFuncaoPeloIdSchema, atualizarFuncionarioFuncaoSchema, deletarFuncionarioFuncaoSchema, };

