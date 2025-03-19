import * as Yup from "yup";

const criarTransferenciaSchema = Yup.object().shape({
    descricaoTransferencia: Yup.string(),
    nomeTransferencia: Yup.string(),
    id_produto: Yup.string(),
    id_funcionario: Yup.string(),
    id_localizacao: Yup.string(),
    dataTransferencia: Yup.date(),
    quantidadeTransferencia: Yup.number(),
});
const listarTransferenciaPeloNome = Yup.object().shape({
    nomeTransferencia: Yup.string().required(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    id_localizacao: Yup.string().required(),
    dataTransferencia: Yup.date().required(),
    quantidadeTransferencia: Yup.number().required(),
});
export { criarTransferenciaSchema, listarTransferenciaPeloNome };