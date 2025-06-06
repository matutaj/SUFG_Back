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
  }: DadosTransferencia): Promise<transferencias> {
    try {
      console.log("Iniciando transação para transferência:", {
        id_produto,
        id_localizacao_origem,
        id_localizacao_destino,
        quantidadeTransferida,
      });

      const result = await prisma.$transaction(async (tx) => {
        // Validar chaves estrangeiras
        console.log("Validando chaves estrangeiras...");
        const funcionario = await tx.funcionarios.findUnique({
          where: { id: id_funcionario },
        });
        if (!funcionario) throw new Error("Funcionário não encontrado.");

        const produto = await tx.produtos.findUnique({
          where: { id: id_produto },
        });
        if (!produto) throw new Error("Produto não encontrado.");

        const localizacaoOrigem = await tx.localizacoes.findUnique({
          where: { id: id_localizacao_origem },
        });
        if (!localizacaoOrigem)
          throw new Error("Localização de origem não encontrada.");

        const localizacaoDestino = await tx.localizacoes.findUnique({
          where: { id: id_localizacao_destino },
        });
        if (!localizacaoDestino)
          throw new Error("Localização de destino não encontrada.");

        const seccao = await tx.seccoes.findUnique({
          where: { id: id_seccao_destino },
        });
        if (!seccao) throw new Error("Seção não encontrada.");

        const prateleira = await tx.prateleiras.findUnique({
          where: { id: id_prateleira_destino },
        });
        if (!prateleira) throw new Error("Prateleira não encontrada.");

        const corredor = await tx.corredores.findUnique({
          where: { id: id_corredor_destino },
        });
        if (!corredor) throw new Error("Corredor não encontrada.");

        // Validar dataTransferencia
        console.log("Validando dataTransferencia...");
        if (
          !(dataTransferencia instanceof Date) ||
          isNaN(dataTransferencia.getTime())
        ) {
          throw new Error("Formato de data inválido.");
        }

        // Validar a localização de origem
        console.log("Buscando localização de origem...");
        const origem = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_origem,
          },
        });

        if (!origem) {
          console.log("Localização de origem não encontrada:", {
            id_produto,
            id_localizacao_origem,
          });
          throw new Error("Localização de origem não encontrada.");
        }

        // Validar quantidade
        console.log(
          `Quantidade disponível na origem ${origem.id}: ${origem.quantidadeProduto}, Solicitado: ${quantidadeTransferida}`
        );
        if (origem.quantidadeProduto < quantidadeTransferida) {
          throw new Error(
            `Quantidade insuficiente na origem. Disponível: ${origem.quantidadeProduto}, Solicitado: ${quantidadeTransferida}`
          );
        }

        // Atualizar localização de origem
        console.log(
          `Atualizando localização de origem ${origem.id} para ${
            origem.quantidadeProduto - quantidadeTransferida
          }`
        );
        await tx.produtosLocalizacoes.update({
          where: { id: origem.id },
          data: {
            quantidadeProduto: origem.quantidadeProduto - quantidadeTransferida,
            updatedAt: new Date(),
          },
        });

        // Validar ou criar localização de destino
        console.log("Buscando localização de destino...");
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
          console.log(
            `Atualizando localização de destino ${destino.id} para ${
              destino.quantidadeProduto + quantidadeTransferida
            }`
          );
          await tx.produtosLocalizacoes.update({
            where: { id: destino.id },
            data: {
              quantidadeProduto:
                destino.quantidadeProduto + quantidadeTransferida,
              updatedAt: new Date(),
            },
          });
        } else {
          console.log("Criando nova localização de destino...");
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

        // Validar estoque total
        console.log("Validando estoque total...");
        const estoque = await tx.estoques.findFirst({
          where: { id_produto },
        });

        if (!estoque) {
          throw new Error("Estoque não encontrado para o produto.");
        }

        // Criar o registro de transferência
        console.log("Criando registro de transferência...");
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

        console.log("Transferência criada com sucesso:", transferencia.id);
        return transferencia;
      });

      return result;
    } catch (error: any) {
      console.error("Erro ao criar transferência:", error);
      throw new Error(error.message || "Falha ao processar a transferência.");
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
          throw new Error("Transferência não encontrada.");
        }

        // Validar chaves estrangeiras
        const funcionario = await tx.funcionarios.findUnique({
          where: { id: id_funcionario },
        });
        if (!funcionario) throw new Error("Funcionário não encontrado.");

        const produto = await tx.produtos.findUnique({
          where: { id: id_produto },
        });
        if (!produto) throw new Error("Produto não encontrado.");

        const localizacaoOrigem = await tx.localizacoes.findUnique({
          where: { id: id_localizacao_origem },
        });
        if (!localizacaoOrigem)
          throw new Error("Localização de origem não encontrada.");

        const localizacaoDestino = await tx.localizacoes.findUnique({
          where: { id: id_localizacao_destino },
        });
        if (!localizacaoDestino)
          throw new Error("Localização de destino não encontrada.");

        const seccao = await tx.seccoes.findUnique({
          where: { id: id_seccao_destino },
        });
        if (!seccao) throw new Error("Seção não encontrada.");

        const prateleira = await tx.prateleiras.findUnique({
          where: { id: id_prateleira_destino },
        });
        if (!prateleira) throw new Error("Prateleira não encontrada.");

        const corredor = await tx.corredores.findUnique({
          where: { id: id_corredor_destino },
        });
        if (!corredor) throw new Error("Corredor não encontrado.");

        // Validar dataTransferencia
        if (
          !(dataTransferencia instanceof Date) ||
          isNaN(dataTransferencia.getTime())
        ) {
          throw new Error("Formato de data inválido.");
        }

        // Validar a localização de origem
        const origem = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_origem,
          },
        });

        if (!origem) {
          throw new Error("Localização de origem não encontrada.");
        }

        if (origem.quantidadeProduto < quantidadeTransferida) {
          throw new Error(
            `Quantidade insuficiente na origem. Disponível: ${origem.quantidadeProduto}, Solicitado: ${quantidadeTransferida}`
          );
        }

        // Validar a localização de destino
        const destino = await tx.produtosLocalizacoes.findFirst({
          where: {
            id_produto,
            id_localizacao: id_localizacao_destino,
            id_seccao: id_seccao_destino,
            id_prateleira: id_prateleira_destino,
            id_corredor: id_corredor_destino,
          },
        });

        if (!destino) {
          throw new Error("Localização de destino não encontrada.");
        }

        // Atualizar a transferência
        const transferenciaAtualizada = await tx.transferencias.update({
          where: { id },
          data: {
            id_funcionario,
            id_produto,
            id_produtoLocalizacao: destino.id,
            dataTransferencia,
            quantidadeTransferida,
            updatedAt: new Date(),
          },
        });

        return transferenciaAtualizada;
      });

      return result;
    } catch (error: any) {
      console.error("Erro ao atualizar transferência:", error);
      throw new Error(error.message || "Falha ao atualizar a transferência.");
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
