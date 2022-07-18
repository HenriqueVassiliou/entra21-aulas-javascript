procedimento(); // Chamada
// Essa função esta sendo chamada e não precisa de argumentos

bemVindo("Henrique Vassiliou");
bemVindo(true);
bemVindo(15);
login("Henrique Vassiliou", 123456)

let resultado = anosDeVida(16);
console.log(resultado);

console.log(anosDeVida(15));

let concatenado = anosDeVida(10) + anosDeVida(20);
console.log(concatenado);

console.log(calcularMedia(8, 9, 10))

console.log(verificarSituacao(5));

console.log(
    verificarSituacao(
        calcularMedia(8, 9, 10)
    )
);

function procedimento() {

    console.log("Esse tipo de função sempre executa da mesma forma, pois não tenho parametros para deixar dinamico");

    console.warn("Essa função tambem não retorna nada");
}

procedimento(); //chamada
//essa função está sendo chamada e não precisa de argumentos

function bemVindo(nome) {

    console.log(typeof (nome));
    console.warn("Bem-vindo " + nome); // Dessa forma estou contatenando
    console.warn("Bem-vindo ", nome);// Dessa forma estou executando um de cada
}

function login(nomeUsuraio, senha) {

    console.error("O usuario " + nomeUsuraio + ", cuja a senha é " + senha + ", não pode entrar.");

}

function anosDeVida(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}

function calcularMedia(nota01, nota02, nota03) {
    return (nota01 + nota02 + nota03) / 3

}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

console.log("Somando ", somar(2, 2));
console.log("Subtraindo ", subtrair(2, 2));
console.log("Multiplicando ", multiplicar(2, 2));
console.log("Dividindo ", dividir(2, 2));