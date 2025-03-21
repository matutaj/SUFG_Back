import { caixas } from "@prisma/client";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class ListarCaixaPeloNomeCasoDeUso {
  async execute(nomeCaixa: string): Promise<caixas> {
    const caixaRepositorio = new CaixaRepositorio();
    const existeNomeCaixa = await caixaRepositorio.listarUmCaixaPeloNome(
      nomeCaixa
    );
    if (!existeNomeCaixa) {
      throw new AppError("Caixa não encontrado");
    }
    return existeNomeCaixa;
  }
}
export { ListarCaixaPeloNomeCasoDeUso };
