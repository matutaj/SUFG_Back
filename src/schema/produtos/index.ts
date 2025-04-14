import * as Yup from "yup";

const criarProdutoSchema = Yup.object().shape({
  id_categoriaProduto: Yup.string().required(),
  referenciaProduto: Yup.string(),
  nomeProduto: Yup.string().required(),
  descricaoProduto: Yup.string(),
  precoVenda: Yup.number().required(),
  quantidadePorUnidade: Yup.number(),
  unidadeMedida: Yup.string(),
  unidadeConteudo: Yup.string(),
});
const listarProdutoPeloNome = Yup.object().shape({
  nomeProduto: Yup.string().required(),
});
const atualizarProdutoSchema = Yup.object().shape({
  id_categoriaProduto: Yup.string(),
  referenciaProduto: Yup.string(),
  nomeProduto: Yup.string(),
  precoVenda: Yup.number(),
  quantidadePorUnidade: Yup.number(),
  unidadeMedida: Yup.string(),
  unidadeConteudo: Yup.string(),
});
const deletarProdutoSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const listarProdutoPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});

export {
  criarProdutoSchema,
  listarProdutoPeloNome,
  atualizarProdutoSchema,
  deletarProdutoSchema,
  listarProdutoPeloIdSchema,
};
