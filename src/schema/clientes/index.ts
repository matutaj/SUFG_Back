import * as Yup from "yup";

const criarClienteSchema = Yup.object().shape({
    nomeCliente: Yup.string(),
    numeroContribuinte: Yup.string(),
    moradaCliente: Yup.string(),
    telefoneCliente: Yup.string(),
    emailCliente: Yup.string()
})
const listarClientePeloNome = Yup.object().shape({
    nomeCliente: Yup.string().required()
})
export {criarClienteSchema, listarClientePeloNome}