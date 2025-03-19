import * as Yup from "yup";

const criarVendaSchema = Yup.object().shape({
    tipoDocumento: Yup.string().required(),
    numeroDocumento: Yup.string().required(),
    id_funcionarioCaixa: Yup.string().required(),
    id_cliente: Yup.string().required(),
    dataEmissao: Yup.date().required(),
    valorTotal: Yup.number().required(),
    dataValidade: Yup.date(),
});
export { criarVendaSchema };