import { AppError } from "../../../../errors/AppError";
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";

class DeleteAlertaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioAlerta = new AlertaRepositorio();

    if (!id) {
      throw new AppError("O ID do alerta é obrigatório para eliminação");
    }

    const existeAlerta = await repositorioAlerta.listarUmAlertaPeloId(id);
    if (!existeAlerta) {
      throw new AppError("Não existe um alerta com esse id");
    }

    await repositorioAlerta.eliminarAlerta(id);
  }
}

export { DeleteAlertaCasoDeUso };