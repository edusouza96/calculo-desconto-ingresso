import { Crianca } from '../Ingressos/Crianca';
import { DiasUteis } from './DiasUteis';

export class Sexta extends DiasUteis
{
    getValor(): number
    {
        if(this.ingresso instanceof Crianca){
            this.valor = 11;        
        }else{
            this.valor = 0;        
        }

        super.getValor();

        return this.valor;
    }
}
