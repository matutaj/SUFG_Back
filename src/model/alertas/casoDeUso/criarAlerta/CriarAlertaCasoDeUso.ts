import { alertas } from "@prisma/client";
import { DadosAlerta } from "../../repositorioAlerta/IAlerta";
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";

export class CriarAlertaCasoDeUso {
    async execute({descricaoAlerta, nomeAlerta, id_caixa, id_produto}: DadosAlerta): Promise<alertas> {
        const repositorioAlerta = new AlertaRepositorio();
        const existeNome = await repositorioAlerta.listarUmAlertaPeloNome(nomeAlerta);
        if (existeNome) {
            throw new Error('Já existe um alerta com esse nome');
        }
        const result = await repositorioAlerta.criarAlerta({descricaoAlerta, nomeAlerta, id_caixa, id_produto});
        return result;
    }
}