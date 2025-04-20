import * as Yup from "yup";

const criarSeccaoSchema = Yup.object().shape({
  descricaoSeccao: Yup.string(),
  nomeSeccao: Yup.string().required(),
});
const listarSeccaoPeloNome = Yup.object().shape({
  nomeSeccao: Yup.string().required(),
});
const atualizarSeccaoSchema = Yup.object().shape({
  descricaoSeccao: Yup.string(),
  nomeSeccao: Yup.string(),
});
const deletarSeccaoSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarSeccaoPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});
export {
  criarSeccaoSchema,
  listarSeccaoPeloNome,
  atualizarSeccaoSchema,
  deletarSeccaoSchema,
  listarSeccaoPeloIdSchema,
};
