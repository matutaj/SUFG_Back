import * as Yup from "yup";

const criarFuncionarioSchema = Yup.object().shape({
    nomeFuncionario: Yup.string().required(),
    numeroContribuinte: Yup.string().required(),
    moradaFuncionario: Yup.string().required(),
    telefoneFuncionario: Yup.string().required(),
    emailFuncionario: Yup.string().required(),
});
const listarFuncionarioPeloNome = Yup.object().shape({
    nomeFuncionario: Yup.string().required(),
});
const atualizarFuncionarioSchema = Yup.object().shape({
    nomeFuncionario: Yup.string().required(),
    numeroContribuinte: Yup.string().required(),
    moradaFuncionario: Yup.string().required(),
    telefoneFuncionario: Yup.string().required(),
    emailFuncionario: Yup.string().required(),
})
const deletarFuncionarioSchema = Yup.object().shape({
    id_funcionario: Yup.string().required(),
})
const listarFuncionarioPeloIdSchema = Yup.object().shape({
    id_funcionario: Yup.string().required(),
})
const listarFuncionarioEmailSchema = Yup.object().shape({
    emailFuncionario: Yup.string().required(),
})
const listarFuncionarioTelefoneSchema = Yup.object().shape({
    telefoneFuncionario: Yup.string().required(),
})
const listarFuncionarioNumeroContribuinteSchema = Yup.object().shape({
    numeroContribuinte: Yup.string().required(),
})

export { criarFuncionarioSchema, listarFuncionarioPeloNome };