import * as Yup from "yup";

const criarTarefaSchema = Yup.object().shape({
  nome: Yup.string().required(),
  descricao: Yup.string(),
  
});

const listarTarefaPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});

const listarTarefaPeloNomeSchema = Yup.object().shape({
  nome: Yup.string().required(),
});

const atualizarTarefaSchema = Yup.object().shape({
  nome: Yup.string(),
  descricao: Yup.string(),
});

const deletarTarefaSchema = Yup.object().shape({
  id: Yup.string().required(),
});

export {
  criarTarefaSchema,
  listarTarefaPeloIdSchema,
  listarTarefaPeloNomeSchema,
  atualizarTarefaSchema,
  deletarTarefaSchema,
};