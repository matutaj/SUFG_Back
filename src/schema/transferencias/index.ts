import * as Yup from "yup";

const criarTransferenciaSchema = Yup.object().shape({
    descricaoTransferencia: Yup.string(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    id_localizacao: Yup.string().required(),
    dataTransferencia: Yup.date().required(),
    quantidadeTransferencia: Yup.number().required(),
});
const listarTransferenciaPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarTransferenciaSchema = Yup.object().shape({
    descricaoTransferencia: Yup.string(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    id_localizacao: Yup.string().required(),
    dataTransferencia: Yup.date().required(),
    quantidadeTransferencia: Yup.number().required(),
})
const deletarTransferenciaSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarTransferenciaSchema, listarTransferenciaPeloIdSchema, atualizarTransferenciaSchema, deletarTransferenciaSchema };