import * as Yup from "yup";

const criarLocalizacaoSchema = Yup.object().shape({
  descricao: Yup.string(),
  nomeLocalizacao: Yup.string().required(),
});
const listarLocalizacaoPeloNome = Yup.object().shape({
  nomeLocalizacao: Yup.string().required(),
});
const atualizarLocalizacaoSchema = Yup.object().shape({
  descricaoLocalizacao: Yup.string(),
  localProduto: Yup.string().required(),
  nomeLocalizacao: Yup.string().required(),
});
const deletarLocalizacaoSchema = Yup.object().shape({
  id_localizacao: Yup.string().required(),
});
const listarLocalizacaoPeloIdSchema = Yup.object().shape({
  id_localizacao: Yup.string().required(),
});
export {
  criarLocalizacaoSchema,
  listarLocalizacaoPeloNome,
  atualizarLocalizacaoSchema,
  deletarLocalizacaoSchema,
  listarLocalizacaoPeloIdSchema,
};
