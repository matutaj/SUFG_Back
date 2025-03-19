import * as Yup from "yup";

const criarPermissaoSchema = Yup.object().shape({
    descricaoPermissao: Yup.string(),
    nomePermissao: Yup.string(),
});
const listarPermissaoPeloNome = Yup.object().shape({
    nomePermissao: Yup.string().required(),
});
export { criarPermissaoSchema, listarPermissaoPeloNome };