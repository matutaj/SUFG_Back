import * as Yup from "yup"

const criarLocalizacaoSchema = Yup.object().shape({
    descricaoLocalizacao:Yup.string(),
    id_corredor:Yup.string().required(),
    id_prateleira:Yup.string().required(),
    id_seccao:Yup.string().required(),
    localProduto:Yup.string(),
    nomeLocalizacao:Yup.string().required(),
})

export{criarLocalizacaoSchema}