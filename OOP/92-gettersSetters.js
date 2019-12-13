const sequecia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this.valor){
            this._valor = valor
        }
    }
}

console.log(sequecia.valor, sequecia.valor)
sequecia.valor = 1000
console.log(sequecia.valor, sequecia.valor)