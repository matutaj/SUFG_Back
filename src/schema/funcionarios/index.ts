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
export { criarFuncionarioSchema, listarFuncionarioPeloNome };