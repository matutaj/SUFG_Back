import * as Yup from "yup";

const criarLocalizacaoSchema = Yup.object().shape({
  descricaoLocalizacao: Yup.string(),
  localProduto: Yup.string(),
  nomeLocalizacao: Yup.string().required(),
});

export { criarLocalizacaoSchema };
