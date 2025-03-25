import * as Yup from "yup";

const criarEntradaSchema = Yup.object().shape({
    id_fornecedor: Yup.string().required(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    produtoRecebido: Yup.string().required(),
    quantidadeRecebida: Yup.number().required(),
    dataEntrada: Yup.date().required(),
    custoUnitario: Yup.number().required(),
});
const listarEntradaPeloIdSchema = Yup.object().shape({
    id_entrada: Yup.string().required(),
})
const atualizarEntradaSchema = Yup.object().shape({
    id_entrada: Yup.string().required(),
    id_fornecedor: Yup.string().required(),
    id_produto: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    produtoRecebido: Yup.string().required(),
    quantidadeRecebida: Yup.number().required(),
    dataEntrada: Yup.date().required(),
})
const deletarEntradaSchema = Yup.object().shape({
    id_entrada: Yup.string().required(),
})
export { criarEntradaSchema, listarEntradaPeloIdSchema, atualizarEntradaSchema, deletarEntradaSchema };