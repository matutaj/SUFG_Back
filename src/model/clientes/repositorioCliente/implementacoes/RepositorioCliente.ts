import prisma from "../../../../prisma/client";
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
  async listarUmClientePeloId(id: string): Promise<clientes | undefined> {
    const listarUmClientePeloId =
      (await prisma.clientes.findUnique({ where: { id } })) || undefined;

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
  async listarEmailCliente(
    emailCliente: string
  ): Promise<clientes | undefined> {
    const listarEmailCliente =
      (await prisma.clientes.findFirst({ where: { emailCliente } })) ||
      undefined;
    return listarEmailCliente;
  }
  async listarTelefoneCliente(
    telefoneCliente: string
  ): Promise<clientes | undefined> {
    const listarTelefoneCliente =
      (await prisma.clientes.findFirst({ where: { telefoneCliente } })) ||
      undefined;
    return listarTelefoneCliente;
  }
  async listarNumeroDeContribuinte(
    numeroContribuinte: string
  ): Promise<clientes | undefined> {
    const listarNumeroDeContribuinte =
      (await prisma.clientes.findFirst({ where: { numeroContribuinte } })) ||
      undefined;
    return listarNumeroDeContribuinte;
  }

  async eliminarCliente(id: string): Promise<void> {
    await prisma.clientes.delete({ where: { id } });
  }
  async atualizarCliente({
    emailCliente,
    moradaCliente,
    nomeCliente,
    numeroContribuinte,
    telefoneCliente,
    id,
  }: DadosCliente): Promise<clientes> {
    const atualizarCliente = await prisma.clientes.update({
      where: { id },
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
