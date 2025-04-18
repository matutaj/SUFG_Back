import * as Yup from "yup";

const criarFuncionarioTarefaSchema = Yup.object().shape({
  id_funcionario: Yup.string().required(),
  id_tarefa: Yup.string().required(),
  status: Yup.string().required()
});

const listarFuncionarioTarefaPeloIdSchema = Yup.object().shape({
  id: Yup.string().required(),
});

const atualizarFuncionarioTarefaSchema = Yup.object().shape({
  id_funcionario: Yup.string(),
  id_tarefa: Yup.string(),
  status: Yup.string()
});

const deletarFuncionarioTarefaSchema = Yup.object().shape({
  id: Yup.string().required(),
});

export {
  criarFuncionarioTarefaSchema,
  listarFuncionarioTarefaPeloIdSchema,
  atualizarFuncionarioTarefaSchema,
  deletarFuncionarioTarefaSchema,
};