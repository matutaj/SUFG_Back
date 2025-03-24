import * as Yup from "yup";

const criarCaixaSchema = Yup.object().shape({
    descricaoCaixa: Yup.string(),
    nomeCaixa: Yup.string().required(),
});
const listarCaixaPeloNome = Yup.object().shape({
    nomeCaixa: Yup.string().required(),
})
const atualizarCaixaSchema = Yup.object().shape({
    descricaoCaixa: Yup.string(),
    nomeCaixa: Yup.string().required(),
})
const deletarCaixaSchema = Yup.object().shape({
    id_caixa: Yup.string().required(),
})
const listarCaixaPeloIdSchema = Yup.object().shape({
    id_caixa: Yup.string().required(),
})
export { criarCaixaSchema, listarCaixaPeloNome, atualizarCaixaSchema, deletarCaixaSchema, listarCaixaPeloIdSchema };