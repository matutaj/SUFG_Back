import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import PDFDocument from "pdfkit";

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

interface RelatorioResponse {
  data: any;
  pdfBuffer?: Buffer;
}

class GerarRelatorioCasoDeUso {
  private repositorio = new RelatorioRepository();

  async execute(
    params: RelatorioParams,
    format: "json" | "pdf" = "json"
  ): Promise<RelatorioResponse> {
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

    // Validação de datas
    if (dataInicio && dataFim && dataInicio > dataFim) {
      throw new AppError("Data inicial deve ser anterior à data final");
    }

    let resultado: any;

    // Fetch data based on report type
    switch (tipoRelatorio) {
      case "vendas-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarVendasPorPeriodo(
          dataInicio,
          dataFim,
          limite
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
          dataFim,
          idProduto
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
          dataFim,
          limite
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

    if (!resultado || (Array.isArray(resultado) && resultado.length === 0)) {
      throw new AppError("Nenhum dado encontrado para o relatório");
    }

    const response: RelatorioResponse = { data: resultado };

    // Generate PDF if requested
    if (format === "pdf") {
      response.pdfBuffer = await this.gerarPDF(
        resultado,
        tipoRelatorio,
        dataInicio,
        dataFim
      );
    }

    return response;
  }

  private async gerarPDF(
    data: any,
    tipoRelatorio: string,
    dataInicio?: Date,
    dataFim?: Date
  ): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({
          size: "A4",
          margin: 50,
          layout: "landscape",
        });
        const buffers: Buffer[] = [];

        // Collect PDF data into buffers
        doc.on("data", (chunk) => buffers.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", (err) =>
          reject(new AppError("Erro na geração do PDF"))
        );

        // PDF Header
        doc
          .fontSize(20)
          .font("Helvetica-Bold")
          .text(`Relatório: ${tipoRelatorio.replace(/-/g, " ")}`, {
            align: "center",
          });
        if (dataInicio && dataFim) {
          doc
            .fontSize(12)
            .font("Helvetica")
            .text(
              `Período: ${dataInicio.toLocaleDateString()} a ${dataFim.toLocaleDateString()}`,
              { align: "center" }
            );
        }
        doc
          .fontSize(12)
          .font("Helvetica")
          .text(`Data de Emissão: ${new Date().toLocaleDateString()}`, {
            align: "center",
          });
        doc.moveDown();

        let y = 100;
        const maxY = 500; // Adjusted for landscape orientation

        switch (tipoRelatorio) {
          case "relatorio-vendas":
            const headersVendas = [
              "Data",
              "Nº Doc",
              "Valor Total",
              "Cliente",
              "Caixa",
              "Funcionário",
              "Produtos",
            ];
            const columnWidthsVendas = [80, 80, 80, 120, 100, 120, 150];
            const columnPositionsVendas = [50, 130, 210, 290, 410, 510, 630];

            doc.fontSize(10).font("Helvetica-Bold");
            headersVendas.forEach((header, i) => {
              doc.text(header, columnPositionsVendas[i], y, {
                width: columnWidthsVendas[i],
                align: "left",
              });
            });
            y += 20;
            doc.moveTo(50, y).lineTo(780, y).stroke(); // Adjusted for landscape width
            y += 10;
            doc.font("Helvetica");

            data.forEach((item: any, index: number) => {
              if (!item) {
                throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
              }

              if (y > maxY) {
                doc.addPage({ layout: "landscape" });
                y = 50;
                doc.fontSize(10).font("Helvetica-Bold");
                headersVendas.forEach((header, i) => {
                  doc.text(header, columnPositionsVendas[i], y, {
                    width: columnWidthsVendas[i],
                    align: "left",
                  });
                });
                y += 20;
                doc.moveTo(50, y).lineTo(780, y).stroke();
                y += 10;
                doc.font("Helvetica");
              }

              const produtos = Array.isArray(item.produtos)
                ? item.produtos
                : [];
              let produtosText = "";
              if (produtos.length > 0) {
                produtosText = produtos
                  .map((produto: any) => {
                    return `${produto.nomeProduto || "-"} (Qtd: ${
                      produto.quantidadeVendida || "-"
                    }, kzs${produto.precoVenda?.toFixed(2) || "-"})`;
                  })
                  .join("; ");
              } else {
                produtosText = "Nenhum produto.";
              }

              const produtosHeight = doc.heightOfString(produtosText, {
                width: columnWidthsVendas[6],
                fontSize: 9,
              });
              const rowHeight = Math.max(20, produtosHeight + 5);

              doc.fontSize(9);
              doc.text(
                item.dataEmissao
                  ? new Date(item.dataEmissao).toLocaleDateString()
                  : "-",
                columnPositionsVendas[0],
                y,
                { width: columnWidthsVendas[0] }
              );
              doc.text(
                item.numeroDocumento || "-",
                columnPositionsVendas[1],
                y,
                { width: columnWidthsVendas[1] }
              );
              doc.text(
                item.valorTotal != null ? item.valorTotal.toFixed(2) : "-",
                columnPositionsVendas[2],
                y,
                { width: columnWidthsVendas[2] }
              );
              doc.text(
                item.cliente?.nomeCliente || "-",
                columnPositionsVendas[3],
                y,
                { width: columnWidthsVendas[3] }
              );
              doc.text(
                item.funcionarioCaixa?.nomeCaixa || "-",
                columnPositionsVendas[4],
                y,
                { width: columnWidthsVendas[4] }
              );
              doc.text(
                item.funcionarioCaixa?.funcionario?.nomeFuncionario || "-",
                columnPositionsVendas[5],
                y,
                { width: columnWidthsVendas[5] }
              );
              doc.text(produtosText, columnPositionsVendas[6], y, {
                width: columnWidthsVendas[6],
              });

              y += rowHeight;
              doc.moveTo(50, y).lineTo(780, y).stroke();
              y += 10;
            });
            break;

          default:
            // Generic table for other report types, excluding IDs
            const isArray = Array.isArray(data);
            const items = isArray ? data : [data];

            if (items.length === 0) {
              doc
                .fontSize(10)
                .font("Helvetica")
                .text("Nenhum dado disponível", 50, y);
              y += 20;
              break;
            }

            // Extract headers, excluding ID fields
            const sampleItem = items[0];
            const headers = Object.keys(sampleItem).filter(
              (key) => !key.toLowerCase().startsWith("id")
            );
            const columnWidths = headers.map(() => 100); // Equal width for simplicity
            const columnPositions = headers.map((_, i) => 50 + i * 100);
            const totalWidth =
              columnPositions[columnPositions.length - 1] + 100;

            // Draw headers
            doc.fontSize(10).font("Helvetica-Bold");
            headers.forEach((header, i) => {
              doc.text(header, columnPositions[i], y, {
                width: columnWidths[i],
                align: "left",
              });
            });
            y += 20;
            doc.moveTo(50, y).lineTo(totalWidth, y).stroke();
            y += 10;
            doc.font("Helvetica");

            // Draw rows
            items.forEach((item: any, index: number) => {
              if (!item) {
                throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
              }

              if (y > maxY) {
                doc.addPage({ layout: "landscape" });
                y = 50;
                doc.fontSize(10).font("Helvetica-Bold");
                headers.forEach((header, i) => {
                  doc.text(header, columnPositions[i], y, {
                    width: columnWidths[i],
                    align: "left",
                  });
                });
                y += 20;
                doc.moveTo(50, y).lineTo(totalWidth, y).stroke();
                y += 10;
                doc.font("Helvetica");
              }

              let rowHeight = 20;
              headers.forEach((header, i) => {
                let value = item[header];
                if (value && typeof value === "object") {
                  // Handle nested objects (e.g., cliente.nomeCliente)
                  if (value.nomeCliente) value = value.nomeCliente;
                  else if (value.nomeProduto) value = value.nomeProduto;
                  else if (value.nomeCaixa) value = value.nomeCaixa;
                  else if (value.nomeFuncionario) value = value.nomeFuncionario;
                  else value = JSON.stringify(value);
                } else if (value instanceof Date) {
                  value = value.toLocaleDateString();
                } else if (typeof value === "number") {
                  value = value.toFixed(2);
                } else {
                  value = value != null ? value.toString() : "-";
                }

                const textHeight = doc.heightOfString(value, {
                  width: columnWidths[i],
                  fontSize: 9,
                });
                rowHeight = Math.max(rowHeight, textHeight + 5);

                doc.fontSize(9).text(value, columnPositions[i], y, {
                  width: columnWidths[i],
                });
              });

              y += rowHeight;
              doc.moveTo(50, y).lineTo(totalWidth, y).stroke();
              y += 10;
            });
            break;
        }

        doc.end();
      } catch (err) {
        reject(
          err instanceof AppError ? err : new AppError("Erro na geração do PDF")
        );
      }
    });
  }
}

export { GerarRelatorioCasoDeUso, RelatorioParams };
