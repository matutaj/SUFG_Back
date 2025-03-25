import * as Yup from "yup";

const criarClienteSchema = Yup.object().shape({
  nomeCliente: Yup.string(),
  numeroContribuinte: Yup.string(),
  moradaCliente: Yup.string(),
  telefoneCliente: Yup.string(),
  emailCliente: Yup.string(),
});
const listarClientePeloNome = Yup.object().shape({
  nomeCliente: Yup.string().required(),
});
const atualizarClienteSchema = Yup.object().shape({
  nomeCliente: Yup.string(),
  numeroContribuinte: Yup.string(),
  moradaCliente: Yup.string(),
  telefoneCliente: Yup.string(),
  emailCliente: Yup.string(),
})
const deletarClienteSchema = Yup.object().shape({
  id_cliente: Yup.string().required(),
})
const listarClientePeloIdSchema = Yup.object().shape({
  id_cliente: Yup.string().required(),
})
const listarClienteEmailSchema = Yup.object().shape({
  emailCliente: Yup.string().required(),
})
const listarClienteTelefoneSchema = Yup.object().shape({
  telefoneCliente: Yup.string().required(),
})
const listarClienteContribuinteSchema = Yup.object().shape({
  numeroContribuinte: Yup.string().required(),
})
export { criarClienteSchema, listarClientePeloNome, atualizarClienteSchema, deletarClienteSchema, listarClientePeloIdSchema, listarClienteEmailSchema, listarClienteTelefoneSchema, listarClienteContribuinteSchema };
