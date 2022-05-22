import { IIngresso } from '../Interfaces/IIngresso';

export class Idoso implements IIngresso
{
    private valor: number;

    constructor()
    {
        this.valor = 6;
    }

    getValor(): number
    {
        return this.valor;
    }
}