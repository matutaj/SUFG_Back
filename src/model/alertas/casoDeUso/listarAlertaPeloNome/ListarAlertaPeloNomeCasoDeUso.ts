import { alertas } from "@prisma/client";
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";
import { AppError } from "../../../../errors/AppError";

class ListarAlertaPeloNomeCasoDeUso {
  async execute(nomeAlerta: string): Promise<alertas> {
    const alertaRepositorio = new AlertaRepositorio();
    const existeNomeAlerta = await alertaRepositorio.listarUmAlertaPeloNome(
      nomeAlerta
    );
    if (!existeNomeAlerta) {
      throw new AppError("Alerta não encontrado");
    }
    return existeNomeAlerta;
  }
}
export { ListarAlertaPeloNomeCasoDeUso };
