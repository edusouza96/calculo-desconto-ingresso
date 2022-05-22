import { DiasUteis } from './DiasUteis';

export class Segunda extends DiasUteis
{
    getValor(): number
    {
        super.getValor();
        this.valor = 10;  
        
        super.getValor();

        return this.valor;
    }

}