import { IIngresso } from '../Interfaces/IIngresso';

export class Estudante implements IIngresso
{
    private valor: number;
    private carteirinha: boolean;

    constructor(carteirinha: boolean)
    {
        this.valor = 8;
        this.carteirinha = carteirinha;
    }

    hasCarteirinha(): boolean
    {
        return this.carteirinha;
    }
    getValor(): number
    {
        return this.valor;
    }
}