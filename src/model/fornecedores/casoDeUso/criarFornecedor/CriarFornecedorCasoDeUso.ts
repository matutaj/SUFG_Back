import { fornecedores } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { DadosFornecedor } from "../../repositorioFornecedor/IFornecedor";

class CriarFornecedorCasoDeUso {
  async execute({
    emailFornecedor,
    moradaFornecedor,
    nomeFornecedor,
    nif,
    telefoneFornecedor,
  }: DadosFornecedor): Promise<fornecedores> {
    const repositorioFornecedor = new FornecedorRepositorio();
    const existeEmail = await repositorioFornecedor.listarEmailFornecedor(
      emailFornecedor
    );
    if (existeEmail) {
      throw new AppError("Já existe um Fornecedor com esse email");
    }
    const existeContribuinte =
      await repositorioFornecedor.listarNumeroDeContribuinte(nif);
    if (existeContribuinte) {
      throw new AppError(
        "Já existe um fornecedor com esse número de contribuinte"
      );
    }
    const existeTelefone = await repositorioFornecedor.listarTelefoneFornecedor(
      telefoneFornecedor
    );
    if (existeTelefone) {
      throw new AppError("Já existe um fornecedor com esse telefone");
    }
    const result = await repositorioFornecedor.criarFornecedor({
      emailFornecedor,
      moradaFornecedor,
      nif,
      nomeFornecedor,
      telefoneFornecedor,
    });
    return result;
  }
}
export { CriarFornecedorCasoDeUso };
