import * as Yup from "yup";

const criarFuncaoSchema = Yup.object().shape({
  descricao: Yup.string(),
  nome: Yup.string().required(),
});
const listarFuncaoPeloNome = Yup.object().shape({
  nome: Yup.string().required(),
});
const atualizarFuncaoSchema = Yup.object().shape({
  descricao: Yup.string(),
  nome: Yup.string(),
});
const deletarFuncaoSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarFuncaoPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});
export {
  criarFuncaoSchema,
  listarFuncaoPeloNome,
  atualizarFuncaoSchema,
  deletarFuncaoSchema,
  listarFuncaoPeloIdSchema,
};
