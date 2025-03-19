import { clientes } from "@prisma/client";
import { DadosCliente } from "../../repositorioCliente/ICliente";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";

class AtualizarClienteCasoDeUso {
  async execute({
    id,
    numeroContribuinte,
    nomeCliente,
    moradaCliente,
    telefoneCliente,
    emailCliente,
  }: DadosCliente): Promise<clientes> {
    const repositorioCliente = new ClienteRepositorio();

    if (!id) {
      throw new Error("O ID do cliente é obrigatório para atualização");
    }

    const existeCliente = await repositorioCliente.listarUmClientePeloId(id);
    if (!existeCliente) {
      throw new Error("Não existe um cliente com esse id");
    }

    const clienteComMesmoContribuinte = await repositorioCliente.listarNumeroDeContribuinte(numeroContribuinte);
    if (clienteComMesmoContribuinte && clienteComMesmoContribuinte.id !== id) {
      throw new Error("Já existe um cliente com esse número de contribuinte");
    }

    const clienteComMesmoEmail = await repositorioCliente.listarEmailCliente(emailCliente);
    if (clienteComMesmoEmail && clienteComMesmoEmail.id !== id) {
      throw new Error("Já existe um cliente com esse email");
    }

    const clienteComMesmoTelefone = await repositorioCliente.listarTelefoneCliente(telefoneCliente);
    if (clienteComMesmoTelefone && clienteComMesmoTelefone.id !== id) {
      throw new Error("Já existe um cliente com esse telefone");
    }

    const result = await repositorioCliente.atualizarCliente({
      id,
      numeroContribuinte,
      nomeCliente,
      moradaCliente,
      telefoneCliente,
      emailCliente,
    });

    return result;
  }
}

export { AtualizarClienteCasoDeUso };