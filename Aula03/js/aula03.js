
console.warn("READ");
let leitura = document.getElementById("paragrafo_ler")
console.log(leitura);
console.log("Apenas o conteudo ou textContent", leitura.textContent);
console.log("Apenas o conteudo mais elementos internos com HTML", leitura.innerHTML);

let aprendendo_leitura = document.getElementById("test_01")

console.log(aprendendo_leitura.textContent);
console.log(aprendendo_leitura.innerHTML);


console.warn("READ MORE")
let paragrafos = [...document.getElementsByTagName("p")]
console.log("Lendo todos os paragrafos", paragrafos);
paragrafos.forEach(paragrafo => {
    console.log(paragrafo.innerHTML);
});

console.warn("Write");
let escrita = document.getElementById("paragrafo_escrever");
escrita.textContent = "Esse paragrafo foi escrito em JavaScript";

document.getElementById("ta_aqui").textContent = "Botão alterado com JavaScript"

let alte01 = document.getElementById("alterar01");
alte01.textContent = "O texto mudou"


function mudarTexto(conteudo) {
    let elemento = document.getElementById("OLA")

    elemento.title = conteudo;
    elemento.textContent = conteudo;

}



function addConteudo(conteudo) {
    let enter = document.createElement("br");

    document.body.append(enter);

    let elemento = document.createElement("div");
    elemento.textContent = conteudo;

    document.body.append(elemento);
}F


