const nums = [ 1, 2, 3, 4, 5 ];

let resultado = nums.map((value) => {
    return value * 2;
})

console.log(resultado);

const somar10 = (value) => value + 10;
const tripo = (value) => value * 3;
const paraDinheiro = (value) => `R$ ${parseFloat(value).toFixed(2).replace('.',',')}`;

resultado = nums
                .map(somar10)
                .map(tripo)
                .map(paraDinheiro);

console.log(resultado);
