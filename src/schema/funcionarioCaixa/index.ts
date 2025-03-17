import * as Yup from "yup"

const criarFuncionarioCaixaSchema= Yup.object().shape({
    id_caixa: Yup.string().required(),
    id_funcionario: Yup.string().required(),
    estadoCaixa: Yup.string().required(),
    quantidadaFaturada: Yup.number().required(),
    horarioAbertura: Yup.date().required(),
    horarioFechamento: Yup.date().required(),
})
export {criarFuncionarioCaixaSchema}