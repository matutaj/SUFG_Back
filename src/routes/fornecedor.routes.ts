import { Router } from "express";
import { CriarFornecedorController } from "../model/fornecedores/casoDeUso/criarFornecedor/CriarFornecedorController";
import { ListarTodosFornecedoresController } from "../model/fornecedores/casoDeUso/listarTodosFornecedores/ListarTodosFornecedoresController";
import { ListarFornecedorPeloNomeController } from "../model/fornecedores/casoDeUso/listarFornecedorPeloNome/ListarFornecedorPeloNomeController";
const fornecedorRouter = Router();
const criarFornecedor = new CriarFornecedorController();
const listarFornecedorPeloNome = new ListarFornecedorPeloNomeController();
const listarTodosFornecedores = new ListarTodosFornecedoresController();

fornecedorRouter.get("/listarTodosFornecedores", listarTodosFornecedores.handle);
fornecedorRouter.get("/listarFornecedorPeloNome/:nomeFornecedor", listarFornecedorPeloNome.handle);
fornecedorRouter.post("/", criarFornecedor.handle);

export { fornecedorRouter };
