import { IDesconto } from '../Interfaces/IDesconto';
import { IIngresso } from '../Interfaces/IIngresso';
import { Idoso } from './Idoso';

export class SabadoDomingoFeriado implements IDesconto
{
    private valor: number;

    constructor(ingresso: IIngresso)
    {
        if(ingresso instanceof Idoso){
            this.valor = 5;        
        }else{
            this.valor = 0;        
        }
    }

    getValor(): number
    {
        return this.valor;
    }
}
