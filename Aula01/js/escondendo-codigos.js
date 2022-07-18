console.log("TESTE") //O console aceita parametros para exibir em log
console.log("Henrique Vassiliou - " + 15 + " anos"); //É possivel concatenar textos e variaveis igual ao Java
console.log("Henrique Vassiliou - ", 15, " anos"); //O console aceita parametros infinitos, basta separar com virgula(,)

let nome = "Henrique"; // Let cria uma variavel com escopo limitado
var sobrenome = "Vassiliou"; // Var cria uma variavel que continua existindo mesmo depois do escopo acabar

console.log("Meu nome é " + nome + " " + sobrenome);

console.log("Meu nome é " + nome);

console.log("Meu nome é", nome);

console.log('Meu nome é ' + nome + 'mas me chamam também de \'Careca\'');

console.log(`Meu nome é ${nome}`);

console.log("No momento nome é do tipo " + typeof (nome));

console.log("No momento nome é do tipo " + typeof (nome));
nome = 10;
console.log("No momento nome é do tipo " + typeof (nome));
nome = false;
console.log("No momento nome é do tipo " + typeof (nome));
nome = "";
let idade = 15;
let altura = 1.86;
console.log(`A variavel idade é do tipo ${typeof (idade)} e a variavel altura é do tipo ${typeof(altura)}`);

// let mensagem = prompt ("O que você esta pensando?")
// let interromper = prompt("Estou imterronpendo")
// console.log("Você esta pensando " + mensagem)
// console.log("A informação capturada é do tipo " + typeof(mensagem));

console.log("Os operadores aritimetricos são os mesmos que o Java +,-,*,/,%");
console.log("Somando "+(1+2));
console.log("Perdendo dinheiro "+(3-1));
console.log("Multiplicando "+(2*2));
console.log("Dividindo "+(4/2));

if(idade<18){
    console.log("Você é menor de idade");
}
else{
    console.log("Você é maior de idade");
}


if(altura<1.50){
    console.log("Baixinho");
}
else if(altura< 1.70){
    console.log("Mediano");
}
else if(altura< 1.90){
    console.log("Você é grande heim!");
}
else{
    console.log("Gigante");
}

let resposta = (altura<2?"Nivel Aragon":"Nivel Gandolf")

switch (idade) {
    case 1:
        console.log("Um aninho");
        break;

case 2:
    console.log("Dois aninhos");
    break;

        default:
            console.log("Teste");
        break;
}

