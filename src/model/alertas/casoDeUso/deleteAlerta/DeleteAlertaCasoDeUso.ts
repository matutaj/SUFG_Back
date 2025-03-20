import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";

class DeleteAlertaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioAlerta = new AlertaRepositorio();

    if (!id) {
      throw new Error("O ID do alerta é obrigatório para eliminação");
    }

    const existeAlerta = await repositorioAlerta.listarUmAlertaPeloId(id);
    if (!existeAlerta) {
      throw new Error("Não existe um alerta com esse id");
    }

    await repositorioAlerta.eliminarAlerta(id);
  }
}

export { DeleteAlertaCasoDeUso };