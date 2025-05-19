import * as Yup from "yup";

const criarTransferenciaSchema = Yup.object().shape({
    id_localizacao_origem: Yup.string().required(),
    id_localizacao_destino: Yup.string().required(),
    id_seccao_destino: Yup.string().required(),
    id_prateleira_destino: Yup.string().required(),
    id_corredor_destino: Yup.string().required(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    id_produtoLocalizacao: Yup.string(),
    dataTransferencia: Yup.date().required(),
    quantidadeTransferida: Yup.number().required(),
});
const listarTransferenciaPeloIdSchema = Yup.object().shape({
    id: Yup.string().required(),
})
const atualizarTransferenciaSchema = Yup.object().shape({
    id_localizacao_origem: Yup.string().required(),
    id_localizacao_destino: Yup.string().required(),
    id_seccao_destino: Yup.string().required(),
    id_prateleira_destino: Yup.string().required(),
    id_corredor_destino: Yup.string().required(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    id_produtoLocalizacao: Yup.string(),
    dataTransferencia: Yup.date().required(),
    quantidadeTransferida: Yup.number().required(),
})
const deletarTransferenciaSchema = Yup.object().shape({
    id: Yup.string().required(),
})
export { criarTransferenciaSchema, listarTransferenciaPeloIdSchema, atualizarTransferenciaSchema, deletarTransferenciaSchema };