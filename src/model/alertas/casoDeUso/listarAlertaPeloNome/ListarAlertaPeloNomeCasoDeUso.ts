import { alertas } from "@prisma/client";
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";

class ListarAlertaPeloNomeCasoDeUso {
    async execute(nomeAlerta: string): Promise<alertas> {
        const alertaRepositorio = new AlertaRepositorio();
        const existeNomeAlerta = await alertaRepositorio.listarUmAlertaPeloNome(nomeAlerta);
        if (!existeNomeAlerta) {
            throw new Error('Alerta não encontrado');
        }
        return existeNomeAlerta;
    }
}
export {ListarAlertaPeloNomeCasoDeUso}