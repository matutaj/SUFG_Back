import * as Yup from "yup";

const criarFornecedorSchema = Yup.object().shape({
  nomeFornecedor: Yup.string().required(),
  numeroContribuinte: Yup.string(),
  moradaFornecedor: Yup.string(),
  telefoneFornecedor: Yup.string(),
  emailFornecedor: Yup.string().required().email(),
});
const listarFornecedorPeloNome = Yup.object().shape({
  nomeFornecedor: Yup.string().required(),
});
const atualizarFornecedorSchema = Yup.object().shape({
  nomeFornecedor: Yup.string(),
  numeroContribuinte: Yup.string(),
  moradaFornecedor: Yup.string(),
  telefoneFornecedor: Yup.string(),
});
const deletarFornecedorSchema = Yup.object().shape({
  id_fornecedor: Yup.string().required(),
});
const listarFornecedorPeloIdSchema = Yup.object().shape({
  id_fornecedor: Yup.string().required(),
});
const listarFornecedorEmailSchema = Yup.object().shape({
  emailFornecedor: Yup.string().required(),
});
const listarFornecedorTelefoneSchema = Yup.object().shape({
  telefoneFornecedor: Yup.string().required(),
});
const listarFornecedorNumeroContribuinteSchema = Yup.object().shape({
  numeroContribuinte: Yup.string().required(),
});
export {
  criarFornecedorSchema,
  listarFornecedorPeloNome,
  atualizarFornecedorSchema,
  deletarFornecedorSchema,
  listarFornecedorPeloIdSchema,
  listarFornecedorEmailSchema,
  listarFornecedorTelefoneSchema,
  listarFornecedorNumeroContribuinteSchema,
};
