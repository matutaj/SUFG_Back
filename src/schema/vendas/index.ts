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
const listarVendaPeloNumeroDocumento = Yup.object().shape({
    tipoDocumento: Yup.string().required(),
    numeroDocumento: Yup.string().required(),
    id_funcionarioCaixa: Yup.string().required(),
    id_cliente: Yup.string().required(),
    dataEmissao: Yup.date().required(),
});
export { criarVendaSchema, listarVendaPeloNumeroDocumento };