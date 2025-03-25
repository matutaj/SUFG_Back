import { prateleiras } from "@prisma/client";

export interface DadosPrateleira {
  id?: string;
  nomePrateleira: string;
  descricao: string;
}
export interface IPrateleira {
  listarTodasPrateleiras(): Promise<prateleiras[]>;
  listarUmaPrateleiraPeloId(id: string): Promise<prateleiras | undefined>;
  listarUmaPrateleiraPeloNome(
    nomePrateleira: string
  ): Promise<prateleiras | undefined>;
  criarPrateleira({}: DadosPrateleira): Promise<prateleiras>;
  atualizarPrateleira({}: DadosPrateleira): Promise<prateleiras>;
  eliminarPrateleira(id: string): Promise<void>;
}
