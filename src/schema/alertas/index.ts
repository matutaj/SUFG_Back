import * as Yup from "yup";

const criarAlertaSchema = Yup.object().shape({
    descricaoAlerta: Yup.string(),
    nomeAlerta: Yup.string().required(),
    id_caixa: Yup.string(),
    id_produto: Yup.string()
});
const listarAlertaPeloNomeSchema = Yup.object().shape({
    nomeAlerta: Yup.string().required(),
});
const atualizarAlertaSchema = Yup.object().shape({
    descricaoAlerta: Yup.string(),
    nomeAlerta: Yup.string().required(),
    id_caixa: Yup.string(),
    id_produto: Yup.string()
});
const deletarAlertaSchema = Yup.object().shape({
    id_alerta: Yup.string().required(),
});
const listarAlertaPeloIdSchema = Yup.object().shape({
    id_alerta: Yup.string().required(),
});

export { criarAlertaSchema, listarAlertaPeloNomeSchema, atualizarAlertaSchema, deletarAlertaSchema, listarAlertaPeloIdSchema };