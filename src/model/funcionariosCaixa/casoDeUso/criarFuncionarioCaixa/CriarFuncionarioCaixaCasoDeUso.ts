import { funcionariosCaixa } from '@prisma/client';
import { DadosFuncionarioCaixa } from '../../repositorioFuncionarioCaixa/IFuncionarioCaixa';
import { FuncionarioCaixaRepositorio } from '../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa';
import { CaixaRepositorio } from '../../../caixas/repositorioCaixa/implementacoes/RepositorioCaixa';
import { FuncionarioRepositorio } from '../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario';
import { AppError } from '../../../../errors/AppError';
import axios from 'axios';

class CriarFuncionarioCaixaCasoDeUso {
  async execute({
    horarioAbertura,
    horarioFechamento,
    id_caixa,
    id_funcionario,
    quantidadaFaturada,
    valorInicial,
  }: DadosFuncionarioCaixa): Promise<funcionariosCaixa> {
    const funcionarioCaixaRepositorio = new FuncionarioCaixaRepositorio();
    const caixaRepositorio = new CaixaRepositorio();
    const funcionarioRepositorio = new FuncionarioRepositorio();

    // Verificar se o caixa existe
    const existeCaixa = await caixaRepositorio.listarUmCaixaPeloId(id_caixa);
    if (!existeCaixa) {
      throw new AppError('Não existe um caixa com este Id', 404);
    }

    // Obter o endereço MAC do serviço local
    let machineMacAddress: string;
    try {
      const response = await axios.get('http://localhost:3001/mac');
      machineMacAddress = response.data.mac;
    } catch (error) {
      throw new AppError('Erro ao obter o endereço MAC do serviço local', 500);
    }

    // Validar o endereço MAC
    if (existeCaixa.mac !== machineMacAddress) {
      console.log('Endereço MAC do caixa:', existeCaixa.mac);
      console.log('Endereço MAC da máquina:', machineMacAddress);
      throw new AppError('Este caixa só pode ser aberto em uma máquina específica.', 403);
    }

    // Verificar se o funcionário existe
    const existeFuncionario = await funcionarioRepositorio.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError(`Não existe um funcionário com o ID ${id_funcionario}`, 404);
    }

    // Verificar se o caixa já está aberto
    const listarEstadoCaixa = await funcionarioCaixaRepositorio.listarEstadoCaixa(id_caixa);
    if (listarEstadoCaixa?.estadoCaixa === true) {
      throw new AppError('O caixa já está aberto', 400);
    }

    // Criar o registro do funcionário no caixa
    const result = await funcionarioCaixaRepositorio.criarFuncionarioCaixa({
      id_caixa,
      id_funcionario,
      estadoCaixa: true,
      horarioAbertura,
      horarioFechamento,
      quantidadaFaturada,
      valorInicial,
    });

    // Enviar o MAC para o servidor central (opcional)
    try {
      await axios.post('http://localhost:3000/receive-mac', { mac: machineMacAddress });
      console.log('MAC enviado para o servidor central com sucesso');
    } catch (error) {
      console.error('Erro ao enviar MAC para o servidor central:', error);
      // Não lançar erro aqui para não interromper o fluxo, apenas logar
    }

    return result;
  }
}

export { CriarFuncionarioCaixaCasoDeUso };