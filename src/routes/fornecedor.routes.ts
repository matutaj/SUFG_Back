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

const fornecedorRouter = Router();

const criarFornecedor = new CriarFornecedorController();
const listarFornecedorPeloId = new ListarUmFornecedorPeloIdController();
const listarFornecedorNumeroContribuinte = new ListarFornecedorNumeroContribuinteController();
const listarEmailFornecedor = new ListarEmailFornecedorController();
const listarTelefoneFornecedor = new ListarTelefoneFornecedorController();
const atualizarFornecedor = new AtualizarFornecedorController();
const deleteFornecedor = new DeleteFornecedorController();
const listarFornecedorPeloNome = new ListarFornecedorPeloNomeController();
const listarTodosFornecedores = new ListarTodosFornecedoresController();

fornecedorRouter.get("/", listarTodosFornecedores.handle);
fornecedorRouter.get("/:id", listarFornecedorPeloId.handle);
fornecedorRouter.get("/email/:email", listarEmailFornecedor.handle);
fornecedorRouter.get("/telefone/:telefone", listarTelefoneFornecedor.handle);
fornecedorRouter.get("/contribuinte/:contribuinte", listarFornecedorNumeroContribuinte.handle);
fornecedorRouter.put("/", atualizarFornecedor.handle);
fornecedorRouter.delete("/:id", deleteFornecedor.handle);
fornecedorRouter.get("/:nomeFornecedor", listarFornecedorPeloNome.handle);
fornecedorRouter.post("/", criarFornecedor.handle);

export { fornecedorRouter };
