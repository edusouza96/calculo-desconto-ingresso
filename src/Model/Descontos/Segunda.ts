import { DiasUteis } from './DiasUteis';

export class Segunda extends DiasUteis
{
    getValor(): number
    {
        this.valor = 10;  
        
        super.getValor();

        return this.valor;
    }

}