import { IIngresso } from '../../Interfaces/IIngresso';

export class Crianca implements IIngresso
{
    private valor: number;

    constructor()
    {
        this.valor = 5.5;
    }

    getValor(): number
    {
        return this.valor;
    }
}