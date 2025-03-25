import * as Yup from "yup";

const criarCorredorSchema = Yup.object().shape({
  descricaoCorredor: Yup.string(),
  nomeCorredor: Yup.string().required(),
});
const listarCorredorPeloNome = Yup.object().shape({
  nomeCorredor: Yup.string().required(),
});
const atualizarCorredorSchema = Yup.object().shape({
  descricaoCorredor: Yup.string(),
  nomeCorredor: Yup.string().required(),
})
const deletarCorredorSchema = Yup.object().shape({
  id_corredor: Yup.string().required(),
})
const listarCorredorPeloIdSchema = Yup.object().shape({
  id_corredor: Yup.string().required(),
})
export { criarCorredorSchema, listarCorredorPeloNome, atualizarCorredorSchema, deletarCorredorSchema, listarCorredorPeloIdSchema };
