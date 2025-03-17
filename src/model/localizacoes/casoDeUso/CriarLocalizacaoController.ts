import { Request, Response } from "express"
import { CriarLocalizacaoCasoDeUso } from "./CriarLocalizacaoCasoDeUso"
import { criarLocalizacaoSchema } from "../../../schema/localizacao";
class CriarLocalizacaoController{
    async handle(req:Request, res:Response):Promise<any>{
        const criarLocalizacaoCasoDeUso = new CriarLocalizacaoCasoDeUso();
        const {descricaoLocalizacao,id_corredor,id_prateleira,id_seccao,localProduto,nomeLocalizacao} = req.body

        if(! criarLocalizacaoSchema.isValid(req.body))
            throw new Error("Erro ao validar os campos");

        const result = await criarLocalizacaoCasoDeUso.execute(req.body)

        return res.status(201).json(result);
    }
}
export{CriarLocalizacaoController}