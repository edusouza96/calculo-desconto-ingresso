import { IDesconto } from "../../Interfaces/IDesconto";
import { IIngresso } from "../../Interfaces/IIngresso";
import { Estudante } from "../Ingressos/Estudante";

export abstract class DiasUteis implements IDesconto
{
    protected ingresso: IIngresso;
    protected valor: number = 0;

    constructor(ingresso: IIngresso)
    {
        this.ingresso = ingresso;
    }

    getValor()
    {
        if(this.isEstudanteComCarteirinha()) 
            this.valor = this.getValoEstudanteComCarteirinha();

        return this.valor;
    }

    protected isEstudanteComCarteirinha(): boolean
    {
        return (this.ingresso instanceof Estudante && this.ingresso.hasCarteirinha());
    }
    protected getValoEstudanteComCarteirinha(): number
    {
        return 35;
    }
}