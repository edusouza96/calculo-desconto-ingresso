import { IDesconto } from '../Interfaces/IDesconto';
import { IIngresso } from '../Interfaces/IIngresso';

export class CalculadoraService
{
    aplicarDesconto(tipoIngresso: IIngresso, desconto: IDesconto): number
    {
        let valorIngresso = tipoIngresso.getValor();
        return  valorIngresso - (valorIngresso * (desconto.getValor()/100))
    }
}

