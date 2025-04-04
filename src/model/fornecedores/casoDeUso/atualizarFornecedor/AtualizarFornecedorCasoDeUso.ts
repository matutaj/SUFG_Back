import { fornecedores } from "@prisma/client";
import { DadosFornecedor } from "../../repositorioFornecedor/IFornecedor";
import { FornecedorRepositorio } from "../../repositorioFornecedor/implementacoes/RepositorioFornecedor";
import { AppError } from "../../../../errors/AppError";
class AtualizarFornecedorCasoDeUso {
  async execute({
    id,
    nif,
    nomeFornecedor,
    moradaFornecedor,
    telefoneFornecedor,
    emailFornecedor,
  }: DadosFornecedor): Promise<fornecedores> {
    const repositorioFornecedor = new FornecedorRepositorio();

    if (!id) {
      throw new AppError("O ID do fornecedor é obrigatório para atualização");
    }

    const existeFornecedor = await repositorioFornecedor.listarUmFornecedorPeloId(id);
    if (!existeFornecedor) {
      throw new AppError("Não existe um fornecedor com esse id");
    }

    const fornecedorComMesmoNif = await repositorioFornecedor.listarNumeroDeContribuinte(nif);
    if (fornecedorComMesmoNif && fornecedorComMesmoNif.id !== id) {
      throw new AppError("Já existe um fornecedor com esse NIF");
    }

    const fornecedorComMesmoEmail = await repositorioFornecedor.listarEmailFornecedor(emailFornecedor);
    if (fornecedorComMesmoEmail && fornecedorComMesmoEmail.id !== id) {
      throw new AppError("Já existe um fornecedor com esse email");
    }

    const fornecedorComMesmoTelefone = await repositorioFornecedor.listarTelefoneFornecedor(telefoneFornecedor);
    if (fornecedorComMesmoTelefone && fornecedorComMesmoTelefone.id !== id) {
      throw new AppError("Já existe um fornecedor com esse telefone");
    }

    const result = await repositorioFornecedor.atualizarFornecedor({
      id,
      nif,
      nomeFornecedor,
      moradaFornecedor,
      telefoneFornecedor,
      emailFornecedor,
    });

    return result;
  }
}

export { AtualizarFornecedorCasoDeUso };