import { Crianca } from './Crianca';
import { DiasUteis } from './DiasUteis';

export class Quinta extends DiasUteis
{
    getValor(): number
    {
        super.getValor();
        if(this.ingresso instanceof Crianca){
            this.valor = 0;        
        }else{
            this.valor = 15;
        }

        super.getValor();

        return this.valor;
    }
}