import * as Yup from "yup";

const criarPermissaoSchema = Yup.object().shape({
  descricao: Yup.string(),
  nome: Yup.string().required(),
});
const listarPermissaoPeloNome = Yup.object().shape({
  nome: Yup.string().required(),
});
const atualizarPermissaoSchema = Yup.object().shape({
  descricao: Yup.string(),
  nome: Yup.string().required(),
  id: Yup.string().required(),
});
const deletarPermissaoSchema = Yup.object().shape({
  id_permissao: Yup.string().required(),
});
const listarPermissaoPeloIdSchema = Yup.object().shape({
  id_permissao: Yup.string().required(),
});
export {
  criarPermissaoSchema,
  listarPermissaoPeloNome,
  atualizarPermissaoSchema,
  deletarPermissaoSchema,
  listarPermissaoPeloIdSchema,
};
