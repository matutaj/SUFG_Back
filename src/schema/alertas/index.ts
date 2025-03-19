import * as Yup from "yup";

const criarAlertaSchema = Yup.object().shape({
    descricaoAlerta: Yup.string(),
    nomeAlerta: Yup.string(),
    id_caixa: Yup.string(),
    id_produto: Yup.string()
});
const listarAlertaPeloNome = Yup.object().shape({
    nomeAlerta: Yup.string().required(),
});
export { criarAlertaSchema, listarAlertaPeloNome };