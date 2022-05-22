import { Crianca } from './Crianca';
import { DiasUteis } from './DiasUteis';

export class Sexta extends DiasUteis
{
    getValor(): number
    {
        super.getValor();
        if(this.ingresso instanceof Crianca){
            this.valor = 11;        
        }else{
            this.valor = 0;        
        }

        super.getValor();

        return this.valor;
    }
}
