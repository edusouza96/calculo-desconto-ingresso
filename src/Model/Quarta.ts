import { DiasUteis } from './DiasUteis';
import { Idoso } from './Idoso';

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