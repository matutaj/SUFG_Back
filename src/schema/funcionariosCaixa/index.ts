import * as Yup from "yup";

const criarFuncionarioCaixaSchema = Yup.object().shape({
  id_caixa: Yup.string().required(),
  id_funcionario: Yup.string().required(),
  quantidadaFaturada: Yup.number().required(),
  horarioAbertura: Yup.date().required(),
  horarioFechamento: Yup.date().required(),
});
const listarFuncionarioCaixaPeloIdSchema = Yup.object().shape({
  id_funcionarioCaixa: Yup.string().required(),
})
const atualizarFuncionarioCaixaSchema = Yup.object().shape({
  id_funcionarioCaixa: Yup.string().required(),
  id_caixa: Yup.string().required(),
  id_funcionario: Yup.string().required(),
  quantidadaFaturada: Yup.number().required(),
  horarioAbertura: Yup.date().required(),
  horarioFechamento: Yup.date().required(),
})
const deletarFuncionarioCaixaSchema = Yup.object().shape({
  id_funcionarioCaixa: Yup.string().required(),
})
const listarFuncionarioCaixaPeloIdCaixaSchema = Yup.object().shape({
  id_caixa: Yup.string().required(),
})
const listarEstadoCaixaSchema = Yup.object().shape({
  estadoCaixa: Yup.boolean().required(),
})
const listarFuncionarioCaixaPelaAberturaSchema = Yup.object().shape({
  horarioAbertura: Yup.date().required(),
})
export { criarFuncionarioCaixaSchema, listarFuncionarioCaixaPeloIdSchema, atualizarFuncionarioCaixaSchema, deletarFuncionarioCaixaSchema, listarFuncionarioCaixaPeloIdCaixaSchema, listarEstadoCaixaSchema, listarFuncionarioCaixaPelaAberturaSchema };


