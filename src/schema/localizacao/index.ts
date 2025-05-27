import * as Yup from "yup";

const criarLocalizacaoSchema = Yup.object().shape({
  descricao: Yup.string(),
  nomeLocalizacao: Yup.string().required(),
  tipo: Yup.string().required(),
});
const listarLocalizacaoPeloNome = Yup.object().shape({
  nomeLocalizacao: Yup.string().required(),
});
const atualizarLocalizacaoSchema = Yup.object().shape({
  descricaoLocalizacao: Yup.string(),
  nomeLocalizacao: Yup.string(),
});
const deletarLocalizacaoSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarLocalizacaoPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});
export {
  criarLocalizacaoSchema,
  listarLocalizacaoPeloNome,
  atualizarLocalizacaoSchema,
  deletarLocalizacaoSchema,
  listarLocalizacaoPeloIdSchema,
};
