import * as Yup from "yup";

const criarFuncionarioCaixaSchema = Yup.object().shape({
  id_caixa: Yup.string().required(),
  id_funcionario: Yup.string().required(),
  quantidadaFaturada: Yup.number(),
  horarioAbertura: Yup.date(),
  horarioFechamento: Yup.date(),
});
const listarFuncionarioCaixaPeloIdSchema = Yup.object().shape({
  id_funcionarioCaixa: Yup.string().required(),
});
const atualizarFuncionarioCaixaSchema = Yup.object().shape({
  id_caixa: Yup.string().uuid().optional(),
  id_funcionario: Yup.string().uuid().optional(),
  estadoCaixa: Yup.boolean().optional(),
  quantidadaFaturada: Yup.number().min(0).optional(),
  horarioAbertura: Yup.date().nullable().optional(),
  horarioFechamento: Yup.string().matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*Z$/, 'Formato de data inválido').nullable().optional(),
});
const deletarFuncionarioCaixaSchema = Yup.object().shape({
  id_funcionarioCaixa: Yup.string().required(),
});
const listarFuncionarioCaixaPeloIdCaixaSchema = Yup.object().shape({
  id_caixa: Yup.string().required(),
});
const listarEstadoCaixaSchema = Yup.object().shape({
  estadoCaixa: Yup.boolean().required(),
});
const listarFuncionarioCaixaPelaAberturaSchema = Yup.object().shape({
  horarioAbertura: Yup.date().required(),
});
export {
  criarFuncionarioCaixaSchema,
  listarFuncionarioCaixaPeloIdSchema,
  atualizarFuncionarioCaixaSchema,
  deletarFuncionarioCaixaSchema,
  listarFuncionarioCaixaPeloIdCaixaSchema,
  listarEstadoCaixaSchema,
  listarFuncionarioCaixaPelaAberturaSchema,
};
