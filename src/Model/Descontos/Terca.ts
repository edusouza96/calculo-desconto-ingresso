import { Estudante } from '../Ingressos/Estudante';
import { DiasUteis } from './DiasUteis';

export class Terca extends DiasUteis
{
    getValor(): number
    {
        if(this.ingresso instanceof Estudante){
            this.valor =  5;        
        }else{
            this.valor =  15;        
        }

        super.getValor();

        return this.valor;
    }
}