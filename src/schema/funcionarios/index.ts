import * as Yup from "yup";

const criarFuncionarioSchema = Yup.object().shape({
  nomeFuncionario: Yup.string().required(),
  numeroContribuinte: Yup.string(),
  moradaFuncionario: Yup.string(),
  telefoneFuncionario: Yup.string(),
  emailFuncionario: Yup.string().required().email(),
});
const listarFuncionarioPeloNome = Yup.object().shape({
  nomeFuncionario: Yup.string().required(),
});
const atualizarFuncionarioSchema = Yup.object().shape({
  nomeFuncionario: Yup.string(),
  numeroContribuinte: Yup.string(),
  moradaFuncionario: Yup.string(),
  telefoneFuncionario: Yup.string(),
  emailFuncionario: Yup.string(),
});
const deletarFuncionarioSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarFuncionarioPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarFuncionarioEmailSchema = Yup.object().shape({
  emailFuncionario: Yup.string().required(),
});
const listarFuncionarioTelefoneSchema = Yup.object().shape({
  telefoneFuncionario: Yup.string().required(),
});
const listarFuncionarioNumeroContribuinteSchema = Yup.object().shape({
  numeroContribuinte: Yup.string().required(),
});

export {
  criarFuncionarioSchema,
  listarFuncionarioPeloNome,
  atualizarFuncionarioSchema,
  deletarFuncionarioSchema,
  listarFuncionarioPeloIdSchema,
  listarFuncionarioEmailSchema,
  listarFuncionarioTelefoneSchema,
  listarFuncionarioNumeroContribuinteSchema,
};
