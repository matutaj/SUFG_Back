import * as Yup from "yup";

const criarLocalizacaoSchema = Yup.object().shape({
  descricaoLocalizacao: Yup.string(),
  localProduto: Yup.string().required(),
  nomeLocalizacao: Yup.string().required(),
});

export { criarLocalizacaoSchema };
