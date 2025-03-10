import { prisma } from "../../../../prisma/client";
import { clientes } from "@prisma/client";
import { DadosCliente, IClientes } from "../ICliente";

class ClienteRepositorio implements IClientes {
  async criarCliente({
    emailCliente,
    moradaCliente,
    nomeCliente,
    numeroContribuinte,
    telefoneCliente,
  }: DadosCliente): Promise<clientes> {
    const criarCliente = await prisma.clientes.create({
      data: {
        nomeCliente,
        emailCliente,
        moradaCliente,
        numeroContribuinte,
        telefoneCliente,
      },
    });
    return criarCliente;
  }

  async listarTodosClientes(): Promise<clientes[]> {
    const listarTodosClientes = await prisma.clientes.findMany();
    return listarTodosClientes;
  }
  async listarUmClientePeloId(
    ID_cliente: string
  ): Promise<clientes | undefined> {
    const listarUmClientePeloId =
      (await prisma.clientes.findUnique({ where: { ID_cliente } })) ||
      undefined;

    return listarUmClientePeloId;
  }

  async listarUmClientePeloNome(
    nomeCliente: string
  ): Promise<clientes | undefined> {
    const listaClientePeloNome =
      (await prisma.clientes.findFirst({ where: { nomeCliente } })) ||
      undefined;
    return listaClientePeloNome;
  }

  async eliminarCliente(id: string): Promise<void> {
    await prisma.clientes.delete({ where: { ID_cliente: id } });
  }
  async atualizarCliente({
    emailCliente,
    moradaCliente,
    nomeCliente,
    numeroContribuinte,
    telefoneCliente,
    ID_cliente,
  }: DadosCliente): Promise<clientes> {
    const atualizarCliente = await prisma.clientes.update({
      where: { ID_cliente },
      data: {
        emailCliente,
        moradaCliente,
        nomeCliente, 
        numeroContribuinte,
        telefoneCliente,
      },
    });
    return atualizarCliente;
  }
}

export { ClienteRepositorio };
