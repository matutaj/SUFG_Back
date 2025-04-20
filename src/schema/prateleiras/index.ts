import * as Yup from "yup";

const criarPrateleiraSchema = Yup.object().shape({
  descricaoPrateleira: Yup.string(),
  nomePrateleira: Yup.string().required(),
});
const listarPrateleiraPeloNome = Yup.object().shape({
  nomePrateleira: Yup.string().required(),
});
const atualizarPrateleiraSchema = Yup.object().shape({
  descricaoPrateleira: Yup.string(),
  nomePrateleira: Yup.string(),
});
const deletarPrateleiraSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarPrateleiraPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});
export {
  criarPrateleiraSchema,
  listarPrateleiraPeloNome,
  atualizarPrateleiraSchema,
  deletarPrateleiraSchema,
  listarPrateleiraPeloIdSchema,
};
