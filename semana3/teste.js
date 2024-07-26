function soma(n1,n2){
    return n1+n2;
}

function multiplicar(n1,n2){
    return n1*n2;
}

// modulos sao pequenas bibliotecas, entao temos bibliotecas para conectar (bancos de dados, gerar pdf, calculos, de front para backend)
// exportamos as funções
module.exports = {
    soma, multiplicar
}