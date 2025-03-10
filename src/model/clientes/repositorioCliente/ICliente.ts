import { clientes } from "@prisma/client";

export interface DadosCliente {
  ID_cliente?: string;
  numeroContribuinte: string;
  nomeCliente: string;
  moradaCliente: string;
  telefoneCliente: string;
  emailCliente: string;
}

export interface IClientes {
  criarCliente({}: DadosCliente): Promise<clientes>;
  listarTodosClientes(): Promise<clientes[]>;
  listarUmClientePeloNome(nomeCliente: string): Promise<clientes | undefined>;
  listarUmClientePeloId(id: string): Promise<clientes | undefined>;
  atualizarCliente({}: DadosCliente): Promise<clientes>;
  eliminarCliente(id: string): Promise<void>;
}
