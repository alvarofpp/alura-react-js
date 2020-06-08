class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    isEquals(outraNegociacao) {
        return this._data.getTime() === outraNegociacao.data.getTime()
            && this._quantidade === outraNegociacao.quantidade
            && this._valor === outraNegociacao.valor;
    }

    static create({data = new Date(), quantidade = 1, valor = 1.0}) {
        return new Negociacao(
            data,
            quantidade,
            valor,
        );
    }
}