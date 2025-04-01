import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";
import { DadosProduto } from "../../repositorioProduto/IProduto";
import { AppError } from "../../../../errors/AppError";
import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";

class CriarProdutoCasoDeUso {
  async execute({
    nomeProduto,
    custoAquisicao,
    precoVenda,
    codigoBarras,
    unidadeConteudo,
    unidadeMedida,
    quantidadeEstoque,
    referenciaProduto,
    id_categoriaProduto,
  }: DadosProduto): Promise<produtos> {
    const repositorioProduto = new ProdutoRepositorio();

    // Verifica se já existe um produto com o mesmo nome
    const existeNome = await repositorioProduto.listarUmProdutoPeloNome(
      nomeProduto
    );
    if (existeNome) {
      throw new AppError("Já existe um produto com esse nome");
    }

    // Gerar código de barras automaticamente se não for fornecido
    let generatedCodigoBarras = codigoBarras;
    if (!generatedCodigoBarras) {
      generatedCodigoBarras = this.gerarCodigoBarrasUnico();

      // Verifica se o código de barras gerado já existe
      let codigoExiste =
        await repositorioProduto.listarUmProdutoPeloCodigoBarras(
          generatedCodigoBarras
        );
      while (codigoExiste) {
        generatedCodigoBarras = this.gerarCodigoBarrasUnico();
        codigoExiste = await repositorioProduto.listarUmProdutoPeloCodigoBarras(
          generatedCodigoBarras
        );
      }
    } else {
      // Se o código de barras foi fornecido, verifica se já existe
      const codigoExiste =
        await repositorioProduto.listarUmProdutoPeloCodigoBarras(codigoBarras);
      if (codigoExiste) {
        throw new AppError("Já existe um produto com esse código de barras");
      }
    }

    // Gera a imagem do código de barras
    await this.gerarImagemCodigoBarras(generatedCodigoBarras);

    // Cria o produto com o código de barras (gerado ou fornecido)
    const result = await repositorioProduto.criarProduto({
      nomeProduto,
      custoAquisicao,
      precoVenda,
      codigoBarras: generatedCodigoBarras,
      unidadeConteudo,
      unidadeMedida,
      quantidadeEstoque,
      referenciaProduto,
      id_categoriaProduto,
    });

    return result;
  }

  // Método auxiliar para gerar um código de barras único
  private gerarCodigoBarrasUnico(): string {
    const length = 12; // Tamanho típico para códigos de barras
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "BC"; // Prefixo para indicar "Barcode"

    for (let i = 0; i < length - 2; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  }

  private async gerarImagemCodigoBarras(codigoBarras: string): Promise<void> {
    try {
      // Cria um canvas para renderizar o código de barras
      const canvas = createCanvas(300, 100);
      JsBarcode(canvas, codigoBarras, {
        format: "CODE128",
        displayValue: true,
        fontSize: 20,
        margin: 10,
      });

      // Define o diretório para salvar a imagem (crie o diretório se não existir)
      const fs = require("fs");
      const path = "./barcodes";
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
      }

      // Salva a imagem como PNG
      const out = fs.createWriteStream(`${path}/${codigoBarras}.png`);
      const stream = canvas.createPNGStream();
      stream.pipe(out);
      out.on("finish", () =>
        console.log(
          `Imagem do código de barras ${codigoBarras}.png salva com sucesso!`
        )
      );
    } catch (error) {
      console.error("Erro ao gerar imagem do código de barras:", error);
      throw new AppError("Falha ao gerar a imagem do código de barras");
    }
  }
}

export { CriarProdutoCasoDeUso };
