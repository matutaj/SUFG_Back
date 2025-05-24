import * as Yup from "yup";

const criarVendaSchema = Yup.object().shape({
  tipoDocumento: Yup.string(),
  numeroDocumento: Yup.string(),
  id_funcionarioCaixa: Yup.string(),
  id_cliente: Yup.string(),
  dataEmissao: Yup.date(),
  valorTotal: Yup.number(),
  dataValidade: Yup.date(),
});
const listarVendaPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});
const atualizarVendaSchema = Yup.object().shape({
  tipoDocumento: Yup.string().required(),
  numeroDocumento: Yup.string().required(),
  id_funcionarioCaixa: Yup.string().required(),
  id_cliente: Yup.string(),
  dataEmissao: Yup.date().required(),
  valorTotal: Yup.number().required(),
  dataValidade: Yup.date(),
});
const deletarVendaSchema = Yup.object().shape({
  id: Yup.string().required(),
});
export {
  criarVendaSchema,
  listarVendaPeloIdSchema,
  atualizarVendaSchema,
  deletarVendaSchema,
};
