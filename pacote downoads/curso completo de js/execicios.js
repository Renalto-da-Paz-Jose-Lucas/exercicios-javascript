/************* Loop for in *********** */
const PESSOA = {
    nome = 'Renalto da paz',
    idade = '28',
    estadoCivil =  'Casado'
}
for (let chave in PESSOA) {
    console.log(chave)// imprime apenas as chaves
    //console.log(chave,PESSOA.nome)
    console.log(chave, PESSOA['nome'])
}

const CORES = ['vermelho', 'azul', 'verde']

for (let indice in CORES) {
    console.log(indice)// imprime apenas indices do vetor
    console.log(indice, CORES[indice])// imprime cores em cada posicao de indice
}

/************* Loop for in *********** */
// mais propria para arrays, nao nos oferece o indice de cada elemento no array
for (let core of CORES) {
    console.log(cor);
}
/************* Exercicio FizzBuzz *********** */
const RESULTADO = fizzBuzz()
console.log(RESULTADO);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Nao e um numero'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    return entrada

}

/* Exercicio metodo para ler propriedades de um objecto e exibir o tipo String  */
const FILME={
    titulo:"Lei de Atracao",
    ano: 2020,
    director : "Bob Proctor" ,
    Personagem: "sua vida"
}

function exibirPropriedade(objecto){
    for(prop in objecto)
    if(typeof objecto[prop] === 'string')
    console.log(prop,objecto[prop])
}
exibirPropriedade(FILME)

/************* Exercicio FizzBuzz *********** */
// funcao que retorna soma de todos multiplos de 3 e 5
function somar(limite){
   let multiplosDe3 = 0
   let multiplosDe5 = 0
    for(let i =0 ; i<=limite; i++){
        if(i%3 === 0)
        multiplosDe3 +=i
        if(i%5 === 0)
        multiplosDe5 +=i
    }
    console.log(multiplosDe3+multiplosDe5)
}
somar(20)
/************* Exercicio FizzBuzz *********** */
//funcao que exibe a quantidade de '*' que a linha possue

function exibirAsteriscos(linhas){
    //let padrao =" "
    //for(let linha =1; lilha<= linhas; linha++){
    //padrao +='*'
   // console.log(padrao)}

    for(let linha =1; lilha<= linhas; linha++){
        let padrao = " "
        for (let i = 1 ; i<linha; i++)
        padrao += '*'
        console.log (padrao)
    }   
}
exibirAsteriscos(5)

/************* Exibir numeros primos *********** */
exibirNumerosPeimos(15)
function exibirNumerosPeimos(limite){
    for(let numero = 2; numero<= limite; numero++ )
    let ehPrimo = true
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero% divisor ===0){
            ehPrimo = false
            break

        }
    }
    if (ehPrimo)
    console.log (`os numeros primos no intervalo sao ${numero}`)
}

/************* Exibir numeros primos  de forma mais clean e reaproveitavel*********** */

function numeroPrimo(numero){
    for(let divisor =2 ; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false
        }
    }
    return true
}
// criando a funcao para exibir numeros primos
function exibirNumerosPrimos(limite){
    for(let numero =2 ; numero<= limite ; numero ++){
        if(numeroPrimo(numero))// testa condicao chamando a funcaon numeroprimo
        console.log(numero);
    }
}



/************* Factory Functions *********** */
//f
const CELULAR = {
    marcaCelular:'ASUS',
    tamanho:{
        vertical:155,
        horizontal: 75
    },
    capacidadeBateria:5000,
    ligar:function(){
        console.log('fazendo ligacao.......')
    }
}

// para cadastraz varios objectos nao seria eficaz entao o fzctory function encapsula permitindo a criacao de varios objectos
function criarCelular( marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligacao......')
        }    
    }
}
const CELULAR1 = criarCelular('samssung',5.5,5000)
console.log(CELULAR1)

/************* constructor function *********** */
//usa o Pascal Case e nao tem retorno
function Celular(marcaCelular,tamanhoTela,cap){
    this.marcaCelular= marcaCelular
    this.tamanhoTela= tamanhoTela
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function(){
        console.log("Fazendo Ligacao....")
    }
}
const celular = new Celular('samssung',5.5,5000)
console.log(celular)

/************* Tamplete literal *********** */
`ola Mundo!!
eu estou exageradamente feliz

o universo esta drenando em mim todo cohuecimento subjectivo e oculto
transformando a minha vida em autetico rio de abundacia e prosperidade
repleta de saude, paz e amor fraterno.
`
/************* Date *********** */
const data1 = new Date()
const data2 = new Date('March 06 2020 12:50')
data1.setFullYear(2021)
data2.getDay


/************* Exercicio Objecto Endereco *********** */
let  endereco = {
 rua:'a',
 cidade:'b',
 cep:'c'
}
function exibirEndereco(endereco){
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}
exibirEndereco(endereco)

/************* Exercicio  Igualidade de Objecto *********** */
function Endereco(rua,cidade,cep){
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}
const endereco1 = new Endereco('a','b','c')
const endereco2 = new Endereco('d','e','f')
const endereco3 = new Endereco('a','b','c')
// dois objectos sao iguais se tem propriedades iguais
function saoIguais(endereco1,endereco3){
    //comparando se as propriedades sao iguais
    return endereco1.rua === endereco3.rua &&
    endereco1.cidade === endereco3.cidade &&
    endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1,endereco3))// reultado ser true
function temEnderecoMemoriaIguais(endereco1,endereco3){
    /*/comparando se a referencia do objecto aponta para o mesmo
    local na memoria*/
    return endereco1 === endereco3;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2))// retorna resultado false

/************* Exercicio  Postagem de Blog *********** */
let postagem = {
    titulo: 'a',
    mensagem:'b',
    autor:'c',
    comentarios =[
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem)

/************* Exercicio  Constructor function *********** */
// crir objecto postagem

function Postagens( titulo, mensagem , autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.comentarios = [],
    this.estaAoVivo = false
}
let postagem = new Postagem('a','b','c')
console.log(postagem);

/************* Exercicio  faixa de precos*********** */
// primeira opcao
let faixas = [
    {tooltip: 'ate $R700', minimo:0, maximo:700},
    {tooltip: 'de $R700 a $R1000', minimo:700, maximo:100},
    {tooltip: 'de $R100', minimo:1000, maximo:999999999}  
]
//segunda opcao usando Factory Function
function criarFaixaPreco (tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixa2 =[
    criarFaixaPreco('a', 1,100),
    criarFaixaPreco('b',100,500),
    criarFaixaPreco('c',500,1000)
]
console.log(faixas)
console.log(faixa2)


/*************indrotucao a Array*********** */
const numeros = [1, 1,2,3,4]

numeros.unshift(0)// adiciona 0 no comeco do array
numeros.splice(1,0,'a')// com tres paremetros indicado primeiro po indice a adicionar elemento, o valor a apagar e o valor a adicionar
console.log(numeros)
numeros.push(5) // adiciona no final do array

// econtrar elemento no array (tipos ptimitivos)

console.log(numeros.indexOf(2))// retorna o indice do elemento se for econtrado ou retorna -1 caso nao econtre
console.log(numeros.lastIndexOf(1))// retorna  o indice do ultimo valor econtado
console.log (numeros.includes(2))// mesma funcionalidade com indexof

// econtadondo elementos no array (tipo referencia)
const marcas =[
    {id:1,nome:'a'},
    {id:2,nome:'b'},    
]
const marca = marcas.find(function(marca){
    return marca.nome ==='a'
})
console.log(marca)

/************* ARROW Functions*********** */
console.log(marcas.find((marca)=> marca.nome === 'a'))

/************* removendo elementos ARRAY *********** */
let numeros = [1,2,3,4,5,6];

console.log(numeros.pop())// remove ultimo elemto do Array
console.log(numeros.shift())// remove elemento no comeco do array

console.log(numeros.splice(2,1)) // remove apartir do indice 2 e remove apenas um indice

// esvaziando um array
//solucao 1
numeros =[]// reestanciar o array. nao apaga outras referencias do array
// solucao2
numeros.length = 0// apaga todas referencias do array;
//solucao3 usando metodo splaice
numeros.splice(0,numeros.length)// apaga em toidas referencias


/*************Combinar e cortando array *********** */
//combinar
const primeiro =[1,2,3]
const segundo = [4,5,6]
const combinado =  primeiro.concat(segundo);
console.log(combinado);
// dividr
const cortado = combinado.slice(1,3)// comeca no indice 1 e termina no 2
const cortado2 = combinado.slice(1) // comeca no indice 1 e retira o resto


/************* operador spread *********** */
const combinado2 = [...primeiro,...segundo, 'ave']  //junta valores dos array em um e pode adicionar mais elementos
 const clonado = [...combinado2]// clonando o array combinado2