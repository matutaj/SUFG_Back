import { caixas } from "@prisma/client";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";
import { AppError } from "../../../../errors/AppError";

class ListarCaixaPeloMacCasoDeUso {
    async execute(mac: string): Promise<caixas | undefined> {
      const repositorioCaixa = new CaixaRepositorio();
      const result = await repositorioCaixa.listarUmCaixaPeloMac(mac);
      if (!result) {
        throw new AppError("Nenhum caixa encontrado com esse mac");
      }
      return result;
    }
}
export { ListarCaixaPeloMacCasoDeUso }