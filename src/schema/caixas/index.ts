import * as Yup from "yup";

const criarCaixaSchema = Yup.object().shape({
    descricaoCaixa: Yup.string(),
    nomeCaixa: Yup.string().required(),
});
const listarCaixaPeloNome = Yup.object().shape({
    nomeCaixa: Yup.string().required(),
})
export { criarCaixaSchema, listarCaixaPeloNome };