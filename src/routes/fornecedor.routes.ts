import { Router } from "express";
import { CriarFornecedorController } from "../model/fornecedores/casoDeUso/criarFornecedor/CriarFornecedorController";
import { ListarTodosFornecedoresController } from "../model/fornecedores/casoDeUso/listarTodosFornecedores/ListarTodosFornecedoresController";
import { ListarFornecedorPeloNomeController } from "../model/fornecedores/casoDeUso/listarFornecedorPeloNome/ListarFornecedorPeloNomeController";
import { AtualizarFornecedorController } from "../model/fornecedores/casoDeUso/atualizarFornecedor/AtualizarFornecedorController";
import { DeleteFornecedorController } from "../model/fornecedores/casoDeUso/deleteFornecedor/DeleteFornecedorController";
import { ListarUmFornecedorPeloIdController } from "../model/fornecedores/casoDeUso/listarFornecedorPeloId/ListarFornecedorPeloIdController";
import { ListarFornecedorNumeroContribuinteController } from "../model/fornecedores/casoDeUso/listarFornecedorNumeroContribuinte/ListarFornecedorNumeroContribuinteController";
import { ListarEmailFornecedorController } from "../model/fornecedores/casoDeUso/listarFornecedorEmail/ListarFornecedorEmailController";
import { ListarTelefoneFornecedorController } from "../model/fornecedores/casoDeUso/listarFornecedorTelefone/ListarFornecedorTelefoneController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const fornecedorRouter = Router();

const criarFornecedor = new CriarFornecedorController();
const listarFornecedorPeloId = new ListarUmFornecedorPeloIdController();
const listarFornecedorNumeroContribuinte =
  new ListarFornecedorNumeroContribuinteController();
const listarEmailFornecedor = new ListarEmailFornecedorController();
const listarTelefoneFornecedor = new ListarTelefoneFornecedorController();
const atualizarFornecedor = new AtualizarFornecedorController();
const deleteFornecedor = new DeleteFornecedorController();
const listarFornecedorPeloNome = new ListarFornecedorPeloNomeController();
const listarTodosFornecedores = new ListarTodosFornecedoresController();

fornecedorRouter.get(
  "/",
  verificarPermissao("listar_fornecedor"),
  listarTodosFornecedores.handle
);
fornecedorRouter.get(
  "/:id",
  verificarPermissao("listar_fornecedor"),
  listarFornecedorPeloId.handle
);
fornecedorRouter.get(
  "/:email",
  verificarPermissao("listar_fornecedor"),
  listarEmailFornecedor.handle
);
fornecedorRouter.put(
  "/:id",
  verificarPermissao("atualizar_fornecedor"),
  atualizarFornecedor.handle
);
fornecedorRouter.delete(
  "/:id",
  verificarPermissao("eliminar_fornecedor"),
  deleteFornecedor.handle
);
fornecedorRouter.post(
  "/",
  verificarPermissao("criar_fornecedor"),
  criarFornecedor.handle
);

export { fornecedorRouter };
