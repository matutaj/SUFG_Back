import { transferencias } from "@prisma/client";
import { DadosTransferencia, ITransferencia } from "../ITransferencia";
import prisma from "../../../../prisma/client";

class TransferenciaRepositorio implements ITransferencia {
  async criarTransferencia({
    id_funcionario,
    id_produto,
    id_localizacao_origem,
    id_localizacao_destino,
    id_seccao_destino,
    id_prateleira_destino,
    id_corredor_destino,
    quantidadeTransferida,
    dataTransferencia,
  }: DadosTransferencia) {
    try {
      const result = await prisma.$transaction(async (tx) => {
        // Validar chaves estrangeiras
        const funcionario = await tx.funcionarios.findUnique({ where: { id: id_funcionario } });
        if (!funcionario) throw new Error('Funcionário não encontrado.');

        const produto = await tx.produtos.findUnique({ where: { id: id_produto } });
        if (!produto) throw new Error('Produto não encontrado.');

        const localizacaoOrigem = await tx.localizacoes.findUnique({ where: { id: id_localizacao_origem } });
        if (!localizacaoOrigem) throw new Error('Localização de origem não encontrada.');

        const localizacaoDestino = await tx.localizacoes.findUnique({ where: { id: id_localizacao_destino } });
        if (!localizacaoDestino) throw new Error('Localização de destino não encontrada.');

        const seccao = await tx.seccoes.findUnique({ where: { id: id_seccao_destino } });
        if (!seccao) throw new Error('Seção não encontrada.');

        const prateleira = await tx.prateleiras.findUnique({ where: { id: id_prateleira_destino } });
        if (!prateleira) throw new Error('Prateleira não encontrada.');

        const corredor = await tx.corredores.findUnique({ where: { id: id_corredor_destino } });
        if (!corredor) throw new Error('Corredor não encontrado.');

        // Validar dataTransferencia
        if (!(dataTransferencia instanceof Date) || isNaN(dataTransferencia.getTime())) {
          throw new Error('Formato de data inválido.');
        }

        // 1. Validar a localização de origem
        const origem = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_origem,
          },
        });

        if (!origem) {
          throw new Error('Localização de origem não encontrada.');
        }

        if (origem.quantidadeProduto < quantidadeTransferida) {
          throw new Error(
            `Quantidade insuficiente na origem. Disponível: ${origem.quantidadeProduto}, Solicitado: ${quantidadeTransferida}`,
          );
        }

        // 2. Validar o estoque total (opcional, para consistência)
        const estoque = await tx.estoques.findFirst({
          where: { id_produto },
        });

        if (!estoque) {
          throw new Error('Estoque não encontrado para o produto.');
        }

        // 3. Atualizar a localização de origem
        await tx.produtosLocalizacoes.update({
          where: { id: origem.id },
          data: {
            quantidadeProduto: origem.quantidadeProduto - quantidadeTransferida,
            updatedAt: new Date(),
          },
        });

        // 4. Verificar ou criar a localização de destino
        let destino = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_destino,
            id_seccao: id_seccao_destino,
            id_prateleira: id_prateleira_destino,
            id_corredor: id_corredor_destino,
          },
        });

        if (destino) {
          // Atualizar localização de destino existente
          destino = await tx.produtosLocalizacoes.update({
            where: { id: destino.id },
            data: {
              quantidadeProduto: destino.quantidadeProduto + quantidadeTransferida,
              updatedAt: new Date(),
            },
          });
        } else {
          // Criar nova localização de destino
          destino = await tx.produtosLocalizacoes.create({
            data: {
              id_produto,
              id_localizacao: id_localizacao_destino,
              id_seccao: id_seccao_destino,
              id_prateleira: id_prateleira_destino,
              id_corredor: id_corredor_destino,
              quantidadeProduto: quantidadeTransferida,
              quantidadeMinimaProduto: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          });
        }

        // 5. Criar o registro de transferência
        const transferencia = await tx.transferencias.create({
          data: {
            id_produto,
            id_funcionario,
            id_produtoLocalizacao: destino.id,
            dataTransferencia,
            quantidadeTransferida,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });

        return transferencia;
      });

      return result;
    } catch (error: any) {
      console.error('Erro ao criar transferência:', error);
      throw new Error(error.message || 'Falha ao processar a transferência.');
    }
  }

  async atualizarTransferencia({
    id_funcionario,
    id_corredor_destino,
    id_localizacao_destino,
    id_prateleira_destino,
    id_localizacao_origem,
    id_seccao_destino,
    id_produto,
    dataTransferencia,
    quantidadeTransferida,
    id,
  }: DadosTransferencia): Promise<transferencias> {
    try {
      const result = await prisma.$transaction(async (tx) => {
        // Validar a transferência existente
        const transferencia = await tx.transferencias.findUnique({
          where: { id },
          include: { produtosLocalizacoes: true },
        });
        if (!transferencia) {
          throw new Error('Transferência não encontrada.');
        }

        // Validar chaves estrangeiras
        const funcionario = await tx.funcionarios.findUnique({ where: { id: id_funcionario } });
        if (!funcionario) throw new Error('Funcionário não encontrado.');

        const produto = await tx.produtos.findUnique({ where: { id: id_produto } });
        if (!produto) throw new Error('Produto não encontrado.');

        const localizacaoOrigem = await tx.localizacoes.findUnique({ where: { id: id_localizacao_origem } });
        if (!localizacaoOrigem) throw new Error('Localização de origem não encontrada.');

        const localizacaoDestino = await tx.localizacoes.findUnique({ where: { id: id_localizacao_destino } });
        if (!localizacaoDestino) throw new Error('Localização de destino não encontrada.');

        const seccao = await tx.seccoes.findUnique({ where: { id: id_seccao_destino } });
        if (!seccao) throw new Error('Seção não encontrada.');

        const prateleira = await tx.prateleiras.findUnique({ where: { id: id_prateleira_destino } });
        if (!prateleira) throw new Error('Prateleira não encontrada.');

        const corredor = await tx.corredores.findUnique({ where: { id: id_corredor_destino } });
        if (!corredor) throw new Error('Corredor não encontrado.');

        // Validar dataTransferencia
        if (!(dataTransferencia instanceof Date) || isNaN(dataTransferencia.getTime())) {
          throw new Error('Formato de data inválido.');
        }

        // Validar a localização de origem
        const origem = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_origem,
          },
        });

        if (!origem) {
          throw new Error('Localização de origem não encontrada.');
        }

        if (origem.quantidadeProduto < quantidadeTransferida) {
          throw new Error(
            `Quantidade insuficiente na origem. Disponível: ${origem.quantidadeProduto}, Solicitado: ${quantidadeTransferida}`,
          );
        }

        // Reverter a quantidade na localização de destino antiga
        const destinoAntigo = transferencia.produtosLocalizacoes;
        await tx.produtosLocalizacoes.update({
          where: { id: destinoAntigo.id },
          data: {
            quantidadeProduto: destinoAntigo.quantidadeProduto - transferencia.quantidadeTransferida,
            updatedAt: new Date(),
          },
        });

        // Validar ou criar a nova localização de destino
        let destinoNovo = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_destino,
            id_seccao: id_seccao_destino,
            id_prateleira: id_prateleira_destino,
            id_corredor: id_corredor_destino,
          },
        });

        if (destinoNovo) {
          // Atualizar localização de destino existente
          destinoNovo = await tx.produtosLocalizacoes.update({
            where: { id: destinoNovo.id },
            data: {
              quantidadeProduto: destinoNovo.quantidadeProduto + quantidadeTransferida,
              updatedAt: new Date(),
            },
          });
        } else {
          // Criar nova localização de destino
          destinoNovo = await tx.produtosLocalizacoes.create({
            data: {
              id_produto,
              id_localizacao: id_localizacao_destino,
              id_seccao: id_seccao_destino,
              id_prateleira: id_prateleira_destino,
              id_corredor: id_corredor_destino,
              quantidadeProduto: quantidadeTransferida,
              quantidadeMinimaProduto: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          });
        }

        // Atualizar a transferência
        const transferenciaAtualizada = await tx.transferencias.update({
          where: { id },
          data: {
            id_funcionario,
            id_produto,
            id_produtoLocalizacao: destinoNovo.id,
            dataTransferencia,
            quantidadeTransferida,
            updatedAt: new Date(),
          },
        });

        return transferenciaAtualizada;
      });

      return result;
    } catch (error: any) {
      console.error('Erro ao atualizar transferência:', error);
      throw new Error(error.message || 'Falha ao atualizar a transferência.');
    }
  }

  async listarTodasTransferencias(): Promise<transferencias[]> {
    const listarTodasTransferencias = await prisma.transferencias.findMany();
    return listarTodasTransferencias;
  }

  async listarUmaTransferenciaPorId(
    id: string
  ): Promise<transferencias | undefined> {
    const listarUmaTransferenciaPorId =
      (await prisma.transferencias.findUnique({ where: { id } })) || undefined;
    return listarUmaTransferenciaPorId;
  }

  async eliminarTransferencia(id: string): Promise<void> {
    await prisma.transferencias.delete({ where: { id } });
  }
}

export { TransferenciaRepositorio };