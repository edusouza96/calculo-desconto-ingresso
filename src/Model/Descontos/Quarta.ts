import { Idoso } from '../Ingressos/Idoso';
import { DiasUteis } from './DiasUteis';

export class Quarta extends DiasUteis
{
    getValor()
    {
        if(this.ingresso instanceof Idoso){
            this.valor = 40;
        }else{
            this.valor = 0;
        }

        super.getValor();

        return this.valor;
    }
}