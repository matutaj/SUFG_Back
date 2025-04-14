import * as Yup from "yup";

const criarEstoqueSchema = Yup.object().shape({
  id_produto: Yup.string().required(),
  quantidadeAtual: Yup.number().required(),
  lote: Yup.string().required(),
  dataValidadeLote: Yup.date().required(),
});

const listarEstoquePeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});

const listarEstoquePeloLoteSchema = Yup.object().shape({
  lote: Yup.string().required(),
});

const atualizarEstoqueSchema = Yup.object().shape({
  id: Yup.string().required(),
  id_produto: Yup.string(),
  quantidadeAtual: Yup.number(),
  lote: Yup.string(),
  dataValidadeLote: Yup.date(),
});

const deletarEstoqueSchema = Yup.object().shape({
  id: Yup.string().required(),
});

export {
  criarEstoqueSchema,
  listarEstoquePeloIdSchema,
  listarEstoquePeloLoteSchema,
  atualizarEstoqueSchema,
  deletarEstoqueSchema,
};
