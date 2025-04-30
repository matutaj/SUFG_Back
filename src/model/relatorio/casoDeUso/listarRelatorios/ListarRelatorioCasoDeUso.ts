import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

interface RelatorioParams {
  tipoRelatorio: string;
  dataInicio?: Date;
  dataFim?: Date;
  data?: Date;
  idProduto?: string;
  idCliente?: string;
  idCaixa?: string;
  limite?: number;
}

class GerarRelatorioCasoDeUso {
  private repositorio = new RelatorioRepository();

  async execute(params: RelatorioParams): Promise<{ filePath: string }> {
    const {
      tipoRelatorio,
      dataInicio,
      dataFim,
      data,
      idProduto,
      idCliente,
      idCaixa,
      limite,
    } = params;

    if (params.dataInicio && params.dataFim) {
      if (
        !(params.dataInicio instanceof Date) ||
        !(params.dataFim instanceof Date)
      ) {
        throw new AppError("Datas devem ser objetos Date válidos");
      }

      if (params.dataInicio > params.dataFim) {
        throw new AppError("Data inicial maior que data final");
      }
    }
    let resultado: any;

    switch (tipoRelatorio) {
      case "vendas-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarVendasPorPeriodo(
          dataInicio,
          dataFim,
        );
        break;
      case "vendas-por-cliente":
        if (!idCliente) throw new AppError("ID do cliente é obrigatório");
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarVendasPorCliente(
          idCliente,
          dataInicio,
          dataFim,
          limite
        );
        break;
      case "produtos-mais-vendidos":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarProdutosMaisVendidos(
          dataInicio,
          dataFim,
          limite
        );
        break;
      case "faturamento-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarFaturamentoPorPeriodo(
          dataInicio,
          dataFim
        );
        break;
      case "quantidade-faturada-por-caixa":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarQuantidadeFaturadaPorCaixa(
          dataInicio,
          dataFim
        );
        break;
      case "estoque-atual":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarEstoqueAtual(
          dataInicio,
          dataFim
        );
        break;
      case "entradas-estoque-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarEntradasEstoquePorPeriodo(
          dataInicio,
          dataFim
        );
        break;
      case "transferencias-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarTransferenciasPorPeriodo(
          dataInicio,
          dataFim
        );
        break;
      case "produtos-abaixo-minimo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarProdutosAbaixoMinimo(
          dataInicio,
          dataFim
        );
        break;
      case "atividade-funcionarios-caixa":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarAtividadeFuncionariosCaixa(
          dataInicio,
          dataFim
        );
        break;
      case "periodo-mais-vendido-por-produto":
        if (!idProduto) throw new AppError("ID do produto é obrigatório");
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarPeriodoMaisVendidoPorProduto(
          idProduto,
          dataInicio,
          dataFim
        );
        break;
      case "atividades-caixas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarAtividadesCaixas(
          dataInicio,
          dataFim,
          idProduto
        );
        break;
      case "tarefas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarTarefas(dataInicio, dataFim);
        break;
      case "relatorio-vendas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioVendas(
          dataInicio,
          dataFim
        );
        break;
      case "relatorio-estoque":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioEstoque(
          dataInicio,
          dataFim,
          idProduto
        );
        break;
      case "relatorio-entradas-estoque":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioEntradasEstoque(
          dataInicio,
          dataFim,
          idProduto
        );
        break;
      case "relatorio-produtos":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioProdutos(
          dataInicio,
          dataFim
        );
        break;
      case "relatorio-produto-localizacao":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioProdutoLocalizacao(
          dataInicio,
          dataFim,
          idProduto
        );
        break;
      case "atividades-do-dia":
        if (!data) throw new AppError("Data é obrigatória");
        resultado = await this.repositorio.listarAtividadesDoDia(data);
        break;
      case "relatorio-caixas":
        resultado = await this.repositorio.listarRelatorioCaixas(
          idCaixa,
          dataInicio,
          dataFim
        );
        break;
      default:
        throw new AppError("Tipo de relatório inválido");
    }

    if (!resultado || !Array.isArray(resultado) || resultado.length === 0) {
      throw new AppError("Nenhum dado encontrado para o relatório");
    }

    return this.gerarRelatorio(resultado, tipoRelatorio, dataInicio, dataFim);
  }

  private async gerarRelatorio(
    data: any[],
    tipoRelatorio: string,
    dataInicio?: Date,
    dataFim?: Date
  ): Promise<{ filePath: string }> {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const outputDir = path.join(__dirname, "../../../../../relatorios");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileName = `${tipoRelatorio}_${timestamp}.pdf`;
    const filePath = path.join(outputDir, fileName);

    await this.gerarPDF(data, tipoRelatorio, filePath, dataInicio, dataFim);

    return { filePath };
  }

  private async gerarPDF(
    data: any[],
    tipoRelatorio: string,
    filePath: string,
    dataInicio?: Date,
    dataFim?: Date
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument();
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        doc
          .fontSize(20)
          .text(`Relatório: ${tipoRelatorio.replace(/-/g, " ")}`, {
            align: "center",
          });
        if (dataInicio && dataFim) {
          doc
            .fontSize(12)
            .text(
              `Período: ${dataInicio.toLocaleDateString()} a ${dataFim.toLocaleDateString()}`,
              { align: "center" }
            );
        }
        doc.moveDown();

        if (tipoRelatorio === "relatorio-vendas") {
          let y = 100;
          data.forEach((item, index) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            doc.fontSize(14).text(`Venda ${index + 1}`, 50, y);
            y += 20;

            // Informações gerais
            doc.fontSize(12).text("Informações Gerais:", 50, y);
            y += 15;
            doc.text(
              `Número do Documento: ${item.numeroDocumento || "-"}`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Data de Emissão: ${
                item.dataEmissao
                  ? new Date(item.dataEmissao).toLocaleDateString()
                  : "-"
              }`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Data de Validade: ${
                item.dataValidade
                  ? new Date(item.dataValidade).toLocaleDateString()
                  : "-"
              }`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Valor Total: ${
                item.valorTotal != null ? item.valorTotal.toFixed(2) : "-"
              }`,
              60,
              y
            );
            y += 20;

            // Cliente
            doc.fontSize(12).text("Cliente:", 50, y);
            y += 15;
            const cliente = item.cliente || {};
            if (!cliente) {
              throw new AppError(
                `Dados do cliente ausentes na venda ${index + 1}`
              );
            }
            doc.text(`Nome: ${cliente.nomeCliente || "-"}`, 60, y);
            y += 15;
            doc.text(
              `Contribuinte: ${cliente.numeroContribuinte || "-"}`,
              60,
              y
            );
            y += 15;
            doc.text(`Morada: ${cliente.moradaCliente || "-"}`, 60, y);
            y += 15;
            doc.text(`Telefone: ${cliente.telefoneCliente || "-"}`, 60, y);
            y += 15;
            doc.text(`Email: ${cliente.emailCliente || "-"}`, 60, y);
            y += 20;

            // Caixa e Funcionário
            doc.fontSize(12).text("Caixa e Funcionário:", 50, y);
            y += 15;
            const funcionarioCaixa = item.funcionarioCaixa || {};
            if (!funcionarioCaixa) {
              throw new AppError(
                `Dados do caixa ausentes na venda ${index + 1}`
              );
            }
            const funcionario = funcionarioCaixa.funcionario || {};
            doc.text(`Caixa: ${funcionarioCaixa.nomeCaixa || "-"}`, 60, y);
            y += 15;
            doc.text(
              `Descrição do Caixa: ${funcionarioCaixa.descricaoCaixa || "-"}`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Faturamento: ${
                funcionarioCaixa.quantidadaFaturada != null
                  ? funcionarioCaixa.quantidadaFaturada.toFixed(2)
                  : "-"
              }`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Abertura: ${
                funcionarioCaixa.horarioAbertura
                  ? new Date(funcionarioCaixa.horarioAbertura).toLocaleString()
                  : "-"
              }`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Fechamento: ${
                funcionarioCaixa.horarioFechamento
                  ? new Date(
                      funcionarioCaixa.horarioFechamento
                    ).toLocaleString()
                  : "-"
              }`,
              60,
              y
            );
            y += 15;
            doc.text(
              `Funcionário: ${funcionario.nomeFuncionario || "-"}`,
              60,
              y
            );
            y += 15;
            doc.text(`BI: ${funcionario.numeroBI || "-"}`, 60, y);
            y += 15;
            doc.text(`Morada: ${funcionario.moradaFuncionario || "-"}`, 60, y);
            y += 15;
            doc.text(
              `Telefone: ${funcionario.telefoneFuncionario || "-"}`,
              60,
              y
            );
            y += 15;
            doc.text(`Email: ${funcionario.emailFuncionario || "-"}`, 60, y);
            y += 20;

            // Produtos
            doc.fontSize(12).text("Produtos Vendidos:", 50, y);
            y += 15;
            if (!item.produtos || !Array.isArray(item.produtos)) {
              throw new AppError(
                `Lista de produtos inválida na venda ${index + 1}`
              );
            }
            if (item.produtos.length > 0) {
              item.produtos.forEach((produto: any, produtoIndex: number) => {
                if (!produto) {
                  throw new AppError(
                    `Produto ${produtoIndex + 1} é nulo na venda ${index + 1}`
                  );
                }
                doc.text(`- Nome: ${produto.nomeProduto || "-"}`, 60, y);
                y += 15;
                doc.text(
                  `  Referência: ${produto.referenciaProduto || "-"}`,
                  60,
                  y
                );
                y += 15;
                doc.text(
                  `  Quantidade: ${produto.quantidadeVendida || "-"}`,
                  60,
                  y
                );
                y += 15;
                doc.text(
                  `  Preço: ${
                    produto.precoVenda != null
                      ? produto.precoVenda.toFixed(2)
                      : "-"
                  }`,
                  60,
                  y
                );
                y += 15;
                doc.text(
                  `  Unidade de Medida: ${produto.unidadeMedida || "-"}`,
                  60,
                  y
                );
                y += 15;
                doc.text(
                  `  Conteúdo: ${produto.unidadeConteudo || "-"}`,
                  60,
                  y
                );
                y += 15;
                doc.text(`  Categoria: ${produto.categoria || "-"}`, 60, y);
                y += 15;
              });
            } else {
              doc.text("Nenhum produto registrado.", 60, y);
              y += 15;
            }

            y += 20;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 20;

            if (y > 700) {
              doc.addPage();
              y = 50;
            }
          });
        } else {
          // Outros relatórios
          let headers: string[] = [];
          switch (tipoRelatorio) {
            case "vendas-por-periodo":
            case "vendas-por-cliente":
              headers = [
                "Data",
                "Cliente",
                "Valor Total",
                "Caixa",
                "Funcionário",
              ];
              break;
            case "produtos-mais-vendidos":
              headers = ["Produto", "Quantidade Vendida", "Valor Total"];
              break;
            case "estoque-atual":
            case "relatorio-estoque":
              headers = ["Produto", "Quantidade", "Localização"];
              break;
            case "produtos-abaixo-minimo":
              headers = [
                "Produto",
                "Quantidade Atual",
                "Quantidade Mínima",
                "Localização",
              ];
              break;
            case "quantidade-faturada-por-caixa":
              headers = ["Caixa", "Quantidade Faturada", "Funcionários"];
              break;
            case "tarefas":
              headers = ["Tarefa", "Descrição", "Funcionários"];
              break;
            case "atividade-funcionarios-caixa":
              headers = ["Caixa", "Funcionário", "Horário Abertura"];
              break;
            case "atividades-do-dia":
              headers = [
                "Tarefa",
                "Descrição",
                "Funcionário",
                "Status",
                "Data Criação",
              ];
              break;
            default:
              headers = Object.keys(data[0] || {}).filter(
                (key) => !key.includes("id")
              );
          }

          doc.fontSize(12).text(headers.join("  |  "), 50, 100);
          doc.moveTo(50, 120).lineTo(550, 120).stroke();
          doc.moveDown();

          let y = 140;
          data.forEach((item, index) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }
            const row = headers.map((header) => {
              let value: any;
              const key = header.toLowerCase().replace(/ /g, "_");
              value = item[key] || item[header] || "-";
              if (value instanceof Date) {
                value = value.toLocaleDateString();
              } else if (typeof value === "number") {
                value = value.toFixed(2);
              } else if (Array.isArray(value)) {
                value = value.map((v: any) => v.nome || v).join(", ");
              }
              return String(value).padEnd(20);
            });
            doc.text(row.join(" "), 50, y);
            y += 20;
          });
        }

        doc.end();
        writeStream.on("finish", resolve);
        writeStream.on("error", (err) => {
          reject(new AppError("Erro ao gravar o arquivo PDF"));
        });
      } catch (err) {
        reject(
          err instanceof AppError ? err : new AppError("Erro na geração do PDF")
        );
      }
    });
  }
}

export { GerarRelatorioCasoDeUso };
