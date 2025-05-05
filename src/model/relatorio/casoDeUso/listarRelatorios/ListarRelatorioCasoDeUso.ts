import { AppError } from "../../../../errors/AppError";
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";
import PDFDocument from "pdfkit"; // Added import
import fs from "fs"; // Added import

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

  async execute(params: RelatorioParams): Promise<any> {
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

    // Validação de datas para relatórios que usam dataInicio e dataFim
    if (dataInicio && dataFim && dataInicio > dataFim) {
      throw new AppError("Data inicial deve ser anterior à data final");
    }

    let resultado: any; // Declared resultado to fix "Cannot find name" error

    switch (tipoRelatorio) {
      case "vendas-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarVendasPorPeriodo(
          dataInicio,
          dataFim,
          limite
        );
        break; // Changed from return to break

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
        break; // Changed from return to break

      case "produtos-mais-vendidos":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarProdutosMaisVendidos(
          dataInicio,
          dataFim,
          limite
        );
        break; // Changed from return to break

      case "faturamento-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarFaturamentoPorPeriodo(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "quantidade-faturada-por-caixa":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarQuantidadeFaturadaPorCaixa(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "estoque-atual":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarEstoqueAtual(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "entradas-estoque-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarEntradasEstoquePorPeriodo(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "transferencias-por-periodo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarTransferenciasPorPeriodo(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "produtos-abaixo-minimo":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarProdutosAbaixoMinimo(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "atividade-funcionarios-caixa":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarAtividadeFuncionariosCaixa(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "periodo-mais-vendido-por-produto":
        if (!idProduto) throw new AppError("ID do produto é obrigatório");
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarPeriodoMaisVendidoPorProduto(
          idProduto,
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "atividades-caixas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarAtividadesCaixas(
          dataInicio,
          dataFim,
          idProduto
        );
        break; // Changed from return to break

      case "tarefas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarTarefas(dataInicio, dataFim);
        break; // Changed from return to break

      case "relatorio-vendas":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioVendas(
          dataInicio,
          dataFim,
          idProduto
        );
        break; // Changed from return to break

      case "relatorio-estoque":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioEstoque(
          dataInicio,
          dataFim,
          idProduto
        );
        break; // Changed from return to break

      case "relatorio-entradas-estoque":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioEntradasEstoque(
          dataInicio,
          dataFim,
          idProduto
        );
        break; // Changed from return to break

      case "relatorio-produtos":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioProdutos(
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      case "relatorio-produto-localizacao":
        if (!dataInicio || !dataFim)
          throw new AppError("Datas são obrigatórias");
        resultado = await this.repositorio.listarRelatorioProdutoLocalizacao(
          dataInicio,
          dataFim,
          idProduto
        );
        break; // Changed from return to break

      case "atividades-do-dia":
        if (!data) throw new AppError("Data é obrigatória");
        resultado = await this.repositorio.listarAtividadesDoDia(data);
        break; // Changed from return to break

      case "relatorio-caixas":
        resultado = await this.repositorio.listarRelatorioCaixas(
          idCaixa,
          dataInicio,
          dataFim
        );
        break; // Changed from return to break

      default:
        throw new AppError("Tipo de relatório inválido");
    }

    if (!resultado || (Array.isArray(resultado) && resultado.length === 0)) {
      throw new AppError("Nenhum dado encontrado para o relatório");
    }

    // Define filePath to fix undefined reference
    const filePath = `./relatorio-${tipoRelatorio}-${Date.now()}.pdf`;

    // Call gerarPDF with the correct data
    await this.gerarPDF(
      resultado,
      tipoRelatorio,
      filePath,
      dataInicio,
      dataFim
    );

    return { filePath };
  }

  private async gerarPDF(
    data: any,
    tipoRelatorio: string,
    filePath: string,
    dataInicio?: Date,
    dataFim?: Date
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ size: "A4", margin: 50 });
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

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
        const maxY = 700;

        if (tipoRelatorio === "relatorio-vendas") {
          const headers = [
            "Data",
            "Nº Doc",
            "Valor Total",
            "Cliente",
            "Caixa",
            "Funcionário",
            "Produtos",
          ];
          const columnWidths = [60, 60, 60, 90, 80, 90, 100];
          const columnPositions = [50, 110, 170, 230, 320, 400, 490];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const produtos = Array.isArray(item.produtos) ? item.produtos : [];
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
              width: columnWidths[6],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, produtosHeight + 5);

            doc.fontSize(9);
            doc.text(
              item.dataEmissao
                ? new Date(item.dataEmissao).toLocaleDateString()
                : "-",
              columnPositions[0],
              y,
              { width: columnWidths[0] }
            );
            doc.text(item.numeroDocumento || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.valorTotal != null ? item.valorTotal.toFixed(2) : "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(item.cliente?.nomeCliente || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });
            doc.text(
              item.funcionarioCaixa?.nomeCaixa || "-",
              columnPositions[4],
              y,
              { width: columnWidths[4] }
            );
            doc.text(
              item.funcionarioCaixa?.funcionario?.nomeFuncionario || "-",
              columnPositions[5],
              y,
              { width: columnWidths[5] }
            );
            doc.text(produtosText, columnPositions[6], y, {
              width: columnWidths[6],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (
          tipoRelatorio === "vendas-por-periodo" ||
          tipoRelatorio === "vendas-por-cliente"
        ) {
          const headers = [
            "Data",
            "Nº Doc",
            "Valor Total",
            "Cliente",
            "Caixa",
            "Funcionário",
            "Produtos",
          ];
          const columnWidths = [60, 60, 60, 90, 80, 90, 100];
          const columnPositions = [50, 110, 170, 230, 320, 400, 490];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const produtos = Array.isArray(item.vendasProdutos)
              ? item.vendasProdutos
              : [];
            let produtosText = "";
            if (produtos.length > 0) {
              produtosText = produtos
                .map((vp: any) => {
                  return `${vp.produtos?.nomeProduto || "-"} (Qtd: ${
                    vp.quantidadeVendida || "-"
                  }, kzs${vp.produtos?.precoVenda?.toFixed(2) || "-"})`;
                })
                .join("; ");
            } else {
              produtosText = "Nenhum produto.";
            }

            const produtosHeight = doc.heightOfString(produtosText, {
              width: columnWidths[6],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, produtosHeight + 5);

            doc.fontSize(9);
            doc.text(
              item.dataEmissao
                ? new Date(item.dataEmissao).toLocaleDateString()
                : "-",
              columnPositions[0],
              y,
              { width: columnWidths[0] }
            );
            doc.text(item.numeroDocumento || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.valorTotal != null ? item.valorTotal.toFixed(2) : "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(item.clientes?.nomeCliente || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });
            doc.text(item.nomeCaixa || "-", columnPositions[4], y, {
              width: columnWidths[4],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[5], y, {
              width: columnWidths[5],
            });
            doc.text(produtosText, columnPositions[6], y, {
              width: columnWidths[6],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "produtos-mais-vendidos") {
          const headers = ["Produto", "Quantidade Vendida", "Valor Total"];
          const columnWidths = [200, 150, 150];
          const columnPositions = [50, 250, 400];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(item.nomeProduto || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.quantidadeVendida?.toString() || "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(
              item.valorTotal != null ? item.valorTotal.toFixed(2) : "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "faturamento-por-periodo") {
          doc.fontSize(12).font("Helvetica-Bold");
          doc.text(
            `Total Faturado: kzs${data.totalFaturado?.toFixed(2) || "0.00"}`,
            50,
            y
          );
          y += 30;

          const headers = [
            "Data",
            "Nº Doc",
            "Valor Total",
            "Cliente",
            "Caixa",
            "Funcionário",
            "Produtos",
          ];
          const columnWidths = [60, 60, 60, 90, 80, 90, 100];
          const columnPositions = [50, 110, 170, 230, 320, 400, 490];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.vendas.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const produtos = Array.isArray(item.vendasProdutos)
              ? item.vendasProdutos
              : [];
            let produtosText = "";
            if (produtos.length > 0) {
              produtosText = produtos
                .map((vp: any) => {
                  return `${vp.produtos?.nomeProduto || "-"} (Qtd: ${
                    vp.quantidadeVendida || "-"
                  }, kzs${vp.produtos?.precoVenda?.toFixed(2) || "-"})`;
                })
                .join("; ");
            } else {
              produtosText = "Nenhum produto.";
            }

            const produtosHeight = doc.heightOfString(produtosText, {
              width: columnWidths[6],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, produtosHeight + 5);

            doc.fontSize(9);
            doc.text(
              item.dataEmissao
                ? new Date(item.dataEmissao).toLocaleDateString()
                : "-",
              columnPositions[0],
              y,
              { width: columnWidths[0] }
            );
            doc.text(item.numeroDocumento || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.valorTotal != null ? item.valorTotal.toFixed(2) : "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(item.clientes?.nomeCliente || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });
            doc.text(item.nomeCaixa || "-", columnPositions[4], y, {
              width: columnWidths[4],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[5], y, {
              width: columnWidths[5],
            });
            doc.text(produtosText, columnPositions[6], y, {
              width: columnWidths[6],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "quantidade-faturada-por-caixa") {
          const headers = ["Caixa", "Quantidade Faturada", "Funcionários"];
          const columnWidths = [150, 150, 200];
          const columnPositions = [50, 200, 350];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const funcionariosText = item.funcionarios?.join(", ") || "-";
            const funcionariosHeight = doc.heightOfString(funcionariosText, {
              width: columnWidths[2],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, funcionariosHeight + 5);

            doc.fontSize(9);
            doc.text(item.nomeCaixa || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.quantidadeFaturada != null
                ? item.quantidadeFaturada.toFixed(2)
                : "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(funcionariosText, columnPositions[2], y, {
              width: columnWidths[2],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "estoque-atual") {
          const headers = ["Produto", "Quantidade", "Localizações"];
          const columnWidths = [150, 100, 250];
          const columnPositions = [50, 200, 300];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const localizacoesText =
              item.localizacoes?.map((loc: any) => loc.nome).join(", ") || "-";
            const localizacoesHeight = doc.heightOfString(localizacoesText, {
              width: columnWidths[2],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, localizacoesHeight + 5);

            doc.fontSize(9);
            doc.text(item.nomeProduto || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.quantidadeEstoque?.toString() || "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(localizacoesText, columnPositions[2], y, {
              width: columnWidths[2],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "entradas-estoque-por-periodo") {
          const headers = [
            "Data",
            "Produto",
            "Quantidade",
            "Fornecedor",
            "Funcionário",
          ];
          const columnWidths = [80, 120, 80, 120, 120];
          const columnPositions = [50, 130, 250, 330, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(
              item.dataEntrada
                ? new Date(item.dataEntrada).toLocaleDateString()
                : "-",
              columnPositions[0],
              y,
              { width: columnWidths[0] }
            );
            doc.text(item.produtoNome || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.quantidadeEntrada?.toString() || "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(item.fornecedorNome || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[4], y, {
              width: columnWidths[4],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "transferencias-por-periodo") {
          const headers = [
            "Data",
            "Produto",
            "Quantidade",
            "Localização",
            "Funcionário",
          ];
          const columnWidths = [80, 120, 80, 120, 120];
          const columnPositions = [50, 130, 250, 330, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(
              item.dataTransferencia
                ? new Date(item.dataTransferencia).toLocaleDateString()
                : "-",
              columnPositions[0],
              y,
              { width: columnWidths[0] }
            );
            doc.text(item.Produtos?.nomeProduto || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.quantidadeTransferida?.toString() || "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(
              item.Localizacoes?.nomeLocalizacao || "-",
              columnPositions[3],
              y,
              { width: columnWidths[3] }
            );
            doc.text(item.funcionarioNome || "-", columnPositions[4], y, {
              width: columnWidths[4],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "produtos-abaixo-minimo") {
          const headers = [
            "Produto",
            "Quantidade Atual",
            "Quantidade Mínima",
            "Localização",
          ];
          const columnWidths = [150, 100, 100, 150];
          const columnPositions = [50, 200, 300, 400];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(item.nomeProduto || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.quantidadeAtual?.toString() || "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(
              item.quantidadeMinima?.toString() || "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(item.localizacao || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "atividade-funcionarios-caixa") {
          const headers = [
            "Caixa",
            "Funcionário",
            "Horário Abertura",
            "Horário Fechamento",
          ];
          const columnWidths = [120, 120, 100, 100];
          const columnPositions = [50, 170, 290, 390];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(item.nomeCaixa || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.horarioAbertura
                ? new Date(item.horarioAbertura).toLocaleString()
                : "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(
              item.horarioFechamento
                ? new Date(item.horarioFechamento).toLocaleString()
                : "-",
              columnPositions[3],
              y,
              { width: columnWidths[3] }
            );

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "periodo-mais-vendido-por-produto") {
          const headers = [
            "Produto",
            "Período",
            "Quantidade Vendida",
            "Valor Total",
          ];
          const columnWidths = [150, 150, 100, 100];
          const columnPositions = [50, 200, 350, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          const item = Array.isArray(data) ? data[0] : data;
          if (!item) {
            throw new AppError("Item é nulo ou indefinido");
          }

          if (y > maxY) {
            doc.addPage();
            y = 50;
            doc.fontSize(10).font("Helvetica-Bold");
            headers.forEach((header, i) => {
              doc.text(header, columnPositions[i], y, {
                width: columnWidths[i],
                align: "left",
              });
            });
            y += 20;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
            doc.font("Helvetica");
          }

          const rowHeight = 20;
          doc.fontSize(9);
          doc.text(item.nomeProduto || "-", columnPositions[0], y, {
            width: columnWidths[0],
          });
          doc.text(item.periodo || "-", columnPositions[1], y, {
            width: columnWidths[1],
          });
          doc.text(
            item.quantidadeVendida?.toString() || "-",
            columnPositions[2],
            y,
            { width: columnWidths[2] }
          );
          doc.text(
            item.valorTotal != null ? item.valorTotal.toFixed(2) : "-",
            columnPositions[3],
            y,
            { width: columnWidths[3] }
          );

          y += rowHeight;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
        } else if (tipoRelatorio === "atividades-caixas") {
          const headers = [
            "Caixa",
            "Funcionário",
            "Quantidade Faturada",
            "Nº Vendas",
          ];
          const columnWidths = [150, 150, 100, 100];
          const columnPositions = [50, 200, 350, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(item.nomeCaixa || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.quantidadeFaturada != null
                ? item.quantidadeFaturada.toFixed(2)
                : "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(
              item.vendas?.length?.toString() || "0",
              columnPositions[3],
              y,
              { width: columnWidths[3] }
            );

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "tarefas") {
          const headers = ["Tarefa", "Descrição", "Funcionários"];
          const columnWidths = [150, 150, 200];
          const columnPositions = [50, 200, 350];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const funcionariosText =
              item.funcionarios?.map((f: any) => f.nome).join(", ") || "-";
            const funcionariosHeight = doc.heightOfString(funcionariosText, {
              width: columnWidths[2],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, funcionariosHeight + 5);

            doc.fontSize(9);
            doc.text(item.nomeTarefa || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(item.descricao || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(funcionariosText, columnPositions[2], y, {
              width: columnWidths[2],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "relatorio-estoque") {
          const headers = ["Produto", "Quantidade Atual", "Localizações"];
          const columnWidths = [150, 100, 250];
          const columnPositions = [50, 200, 300];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const localizacoesText =
              item.localizacoes
                ?.map(
                  (loc: any) =>
                    `${loc.nome} (Seção: ${loc.seccao}, Corredor: ${loc.corredor}, Prateleira: ${loc.prateleira})`
                )
                .join("; ") || "-";
            const localizacoesHeight = doc.heightOfString(localizacoesText, {
              width: columnWidths[2],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, localizacoesHeight + 5);

            doc.fontSize(9);
            doc.text(item.nomeProduto || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.quantidadeAtual?.toString() || "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(localizacoesText, columnPositions[2], y, {
              width: columnWidths[2],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "relatorio-entradas-estoque") {
          const headers = [
            "Data",
            "Produto",
            "Quantidade",
            "Preço",
            "Fornecedor",
            "Funcionário",
          ];
          const columnWidths = [80, 120, 80, 50, 80, 100];
          const columnPositions = [50, 130, 250, 330, 360, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(
              item.dataEntrada
                ? new Date(item.dataEntrada).toLocaleDateString()
                : "-",
              columnPositions[0],
              y,
              { width: columnWidths[0] }
            );
            doc.text(item.produtoNome || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(
              item.quantidadeRecebida?.toString() || "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(
              item.custoUnitario?.toString() || "-",
              columnPositions[3],
              y,
              { width: columnWidths[3] }
            );
            doc.text(item.fornecedorNome || "-", columnPositions[4], y, {
              width: columnWidths[4],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[5], y, {
              width: columnWidths[5],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "relatorio-produtos") {
          const headers = ["Produto", "Preço Venda", "Quantidade", "Categoria"];
          const columnWidths = [150, 100, 100, 150];
          const columnPositions = [50, 200, 300, 400];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(item.nomeProduto || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.precoVenda != null ? item.precoVenda.toFixed(2) : "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(
              item.quantidadePorUnidade?.toString() || "-",
              columnPositions[2],
              y,
              { width: columnWidths[2] }
            );
            doc.text(item.categoria || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "relatorio-produto-localizacao") {
          const headers = [
            "Produto",
            "Localização",
            "Seção",
            "Corredor",
            "Prateleira",
            "Quantidade",
          ];
          const columnWidths = [100, 100, 80, 80, 80, 80];
          const columnPositions = [50, 150, 250, 330, 410, 490];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const rowHeight = 20;
            doc.fontSize(9);
            doc.text(item.nomeProduto || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(item.localizacao?.nome || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(item.localizacao?.seccao || "-", columnPositions[2], y, {
              width: columnWidths[2],
            });
            doc.text(item.localizacao?.corredor || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });
            doc.text(
              item.localizacao?.prateleira || "-",
              columnPositions[4],
              y,
              {
                width: columnWidths[4],
              }
            );
            doc.text(
              item.localizacao?.quantidade?.toString() || "-",
              columnPositions[5],
              y,
              { width: columnWidths[5] }
            );

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "atividades-do-dia") {
          const headers = [
            "Tarefa",
            "Descrição",
            "Funcionário",
            "Status",
            "Data Criação",
          ];
          const columnWidths = [100, 120, 100, 80, 100];
          const columnPositions = [50, 150, 270, 370, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const descricaoHeight = doc.heightOfString(item.descricao || "-", {
              width: columnWidths[1],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, descricaoHeight + 5);

            doc.fontSize(9);
            doc.text(item.nomeTarefa || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(item.descricao || "-", columnPositions[1], y, {
              width: columnWidths[1],
            });
            doc.text(item.funcionarioNome || "-", columnPositions[2], y, {
              width: columnWidths[2],
            });
            doc.text(item.status || "-", columnPositions[3], y, {
              width: columnWidths[3],
            });
            doc.text(
              item.dataCriacao
                ? new Date(item.dataCriacao).toLocaleDateString()
                : "-",
              columnPositions[4],
              y,
              { width: columnWidths[4] }
            );

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else if (tipoRelatorio === "relatorio-caixas") {
          const headers = [
            "Caixa",
            "Quantidade Faturada",
            "Funcionários",
            "Nº Vendas",
          ];
          const columnWidths = [150, 100, 150, 100];
          const columnPositions = [50, 200, 300, 450];

          doc.fontSize(10).font("Helvetica-Bold");
          headers.forEach((header, i) => {
            doc.text(header, columnPositions[i], y, {
              width: columnWidths[i],
              align: "left",
            });
          });
          y += 20;
          doc.moveTo(50, y).lineTo(550, y).stroke();
          y += 10;
          doc.font("Helvetica");

          data.forEach((item: any, index: number) => {
            if (!item) {
              throw new AppError(`Item ${index + 1} é nulo ou indefinido`);
            }

            if (y > maxY) {
              doc.addPage();
              y = 50;
              doc.fontSize(10).font("Helvetica-Bold");
              headers.forEach((header, i) => {
                doc.text(header, columnPositions[i], y, {
                  width: columnWidths[i],
                  align: "left",
                });
              });
              y += 20;
              doc.moveTo(50, y).lineTo(550, y).stroke();
              y += 10;
              doc.font("Helvetica");
            }

            const funcionariosText =
              item.funcionarios?.map((f: any) => f.nome).join(", ") || "-";
            const funcionariosHeight = doc.heightOfString(funcionariosText, {
              width: columnWidths[2],
              fontSize: 9,
            });
            const rowHeight = Math.max(20, funcionariosHeight + 5);

            doc.fontSize(9);
            doc.text(item.nomeCaixa || "-", columnPositions[0], y, {
              width: columnWidths[0],
            });
            doc.text(
              item.quantidadeFaturada != null
                ? item.quantidadeFaturada.toFixed(2)
                : "-",
              columnPositions[1],
              y,
              { width: columnWidths[1] }
            );
            doc.text(funcionariosText, columnPositions[2], y, {
              width: columnWidths[2],
            });
            doc.text(
              item.vendas?.length?.toString() || "0",
              columnPositions[3],
              y,
              { width: columnWidths[3] }
            );

            y += rowHeight;
            doc.moveTo(50, y).lineTo(550, y).stroke();
            y += 10;
          });
        } else {
          throw new AppError(
            `Relatório ${tipoRelatorio} não suportado para renderização`
          );
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

export { GerarRelatorioCasoDeUso, RelatorioParams };
