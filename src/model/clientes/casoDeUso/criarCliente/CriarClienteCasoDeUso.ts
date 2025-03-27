import { clientes } from "@prisma/client";
import { DadosCliente } from "../../repositorioCliente/ICliente";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class CriarClienteCasoDeUso {
  async execute({
    emailCliente,
    moradaCliente,
    nomeCliente,
    numeroContribuinte,
    telefoneCliente,
  }: DadosCliente): Promise<clientes> {
    const repositorioCliente = new ClienteRepositorio();
    const existeEmail = await repositorioCliente.listarEmailCliente(
      emailCliente
    );
    if (existeEmail) {
      throw new AppError("Já existe um cliente com esse email");
    }
    const existeContribuinte =
      await repositorioCliente.listarNumeroDeContribuinte(numeroContribuinte);
    if (existeContribuinte) {
      throw new Error("Já existe um cliente com esse número de contribuinte");
    }
    const existeTelefone = await repositorioCliente.listarTelefoneCliente(
      telefoneCliente
    );
    if (existeTelefone) {
      throw new Error("Já existe um cliente com esse telefone");
    }
    const result = await repositorioCliente.criarCliente({
      emailCliente,
      moradaCliente,
      nomeCliente,
      numeroContribuinte,
      telefoneCliente,
    });
    return result;
  }
}
export { CriarClienteCasoDeUso };
