import { seccoes } from "@prisma/client";
import { DadosSeccao } from "../../repositorioSeccoes/ISeccao";
import { SeccaoRepositorio } from "../../repositorioSeccoes/Implementacoes/RepositorioSeccao";


class CriarSeccaoCasoDeUso {
  async execute({
    nomeSeccao,
    descricaoSeccao,
  }: DadosSeccao): Promise<seccoes> {
    const repositorioSeccoes = new SeccaoRepositorio();
    const existeNome = await repositorioSeccoes.listarUmaSeccaoPeloNome(
      nomeSeccao
    );
    if (existeNome) {
      throw new Error("Já existe uma seccao com esse nome");
    }
    const result = await repositorioSeccoes.criarSeccao({
      nomeSeccao,
      descricaoSeccao,
    });
    return result;
  }
}
export { CriarSeccaoCasoDeUso };
