import * as Yup from "yup";

const criarTransferenciaSchema = Yup.object().shape({
    descricaoTransferencia: Yup.string(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    id_localizacao: Yup.string().required(),
    dataTransferencia: Yup.date().required(),
    quantidadeTransferencia: Yup.number().required(),
});
export { criarTransferenciaSchema };