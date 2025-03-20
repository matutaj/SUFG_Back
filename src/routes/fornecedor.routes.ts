import { Router } from "express";
import { CriarFornecedorController } from "../model/fornecedores/casoDeUso/criarFornecedor/CriarFornecedorController";
import { ListarTodosFornecedoresController } from "../model/fornecedores/casoDeUso/listarTodosFornecedores/ListarTodosFornecedoresController";
import { ListarFornecedorPeloNomeController } from "../model/fornecedores/casoDeUso/listarFornecedorPeloNome/ListarFornecedorPeloNomeController";
import { AtualizarFornecedorController } from "../model/fornecedores/casoDeUso/atualizarFornecedor/AtualizarFornecedorController";
import { DeleteFornecedorController } from "../model/fornecedores/casoDeUso/deleteFornecedor/DeleteFornecedorController";

const fornecedorRouter = Router();

const criarFornecedor = new CriarFornecedorController();
const atualizarFornecedor = new AtualizarFornecedorController();
const deleteFornecedor = new DeleteFornecedorController();
const listarFornecedorPeloNome = new ListarFornecedorPeloNomeController();
const listarTodosFornecedores = new ListarTodosFornecedoresController();

fornecedorRouter.get("/", listarTodosFornecedores.handle);
fornecedorRouter.put("/", atualizarFornecedor.handle);
fornecedorRouter.delete("/:id", deleteFornecedor.handle);
fornecedorRouter.get("/:nomeFornecedor", listarFornecedorPeloNome.handle);
fornecedorRouter.post("/", criarFornecedor.handle);

export { fornecedorRouter };
