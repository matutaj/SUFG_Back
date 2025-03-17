import { funcionariosCaixa,estadoCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa } from "../../repositorioFuncionarioCaixa/IFuncionarioCaixa";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { CaixaRepositorio } from "../../../caixas/repositorioCaixa/implementacoes/RepositorioCaixa";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";

export interface dadoFucionarioCaixa{
    estadoCaixa:estadoCaixa ,
    id_caixa: string;
    id_funcionario: string;
    quantidadaFaturada: number;
    horarioAbertura: Date;
    horarioFechamento: Date;
}

export interface dadoFuncionario{
    id_funcionario: string
}
export interface DadosCaixa{
    detalhesDaCaixa: dadoFucionarioCaixa;
    funcionario: dadoFuncionario[]

}

class CriarFuncionarioCaixaCasodeUso{

    async execute(dado:DadosCaixa):Promise<funcionariosCaixa>{
        const funcionarioCaixaRepositorio = new FuncionarioCaixaRepositorio()
        const caixaRepositorio = new CaixaRepositorio()
        const funcionarioRepositorio = new FuncionarioRepositorio() 

        const existeCaixa = await caixaRepositorio.listarUmCaixaPeloId(dado.detalhesDaCaixa.id_caixa)
        if(!existeCaixa){
            throw new Error("Não existe um caixa com este Id");
        }

        if (dado.funcionario.length > 0) {
            const existeFuncionario = await funcionarioRepositorio.listarUmFuncionarioPeloId(dado.funcionario[0].id_funcionario);
            if (!existeFuncionario) {
                throw new Error(`Não existe um funcionário com o ID ${dado.funcionario[0].id_funcionario}`);
            }
        } else {
            throw new Error("Nenhum funcionário fornecido para associar ao caixa");
        }

        const existeCaixaAberto = await funcionarioCaixaRepositorio.listarUmFuncionarioCaixaPelaAbertura(dado.detalhesDaCaixa.horarioAbertura);
        if (existeCaixaAberto && dado.detalhesDaCaixa.estadoCaixa.toLocaleLowerCase() === "aberto") {
            throw new Error("Já existe um caixa aberto neste horário");
        }
      
        const result = await funcionarioCaixaRepositorio.criarFuncionarioCaixa( 
            {
            id_caixa: dado.detalhesDaCaixa.id_caixa,
            id_funcionario: dado.funcionario[0].id_funcionario,
            estadoCaixa: dado.detalhesDaCaixa.estadoCaixa,
            horarioAbertura: dado.detalhesDaCaixa.horarioAbertura,
            horarioFechamento: dado.detalhesDaCaixa.horarioFechamento,
            quantidadaFaturada: dado.detalhesDaCaixa.quantidadaFaturada
            }
        )
        return result;
    }
}
export{CriarFuncionarioCaixaCasodeUso}