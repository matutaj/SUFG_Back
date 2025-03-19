import * as Yup from "yup";

const criarFornecedorSchema = Yup.object().shape({
    nomeFornecedor: Yup.string().required(),
    numeroContribuinte: Yup.string().required(),
    moradaFornecedor: Yup.string().required(),
    telefoneFornecedor: Yup.string().required(),
    emailFornecedor: Yup.string().required(),
});
const listarFornecedorPeloNome = Yup.object().shape({
    nomeFornecedor: Yup.string().required(),
});
export { criarFornecedorSchema, listarFornecedorPeloNome };