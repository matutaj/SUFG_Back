import { clientes } from "@prisma/client";

export interface DadosCliente {
  id?: string;
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
  listarEmailCliente(emailCliente: string): Promise<clientes | undefined>;
  listarTelefoneCliente(telefoneCliente: string): Promise<clientes | undefined>;
  listarNumeroDeContribuinte(
    numeroContribuinte: string
  ): Promise<clientes | undefined>;
}
