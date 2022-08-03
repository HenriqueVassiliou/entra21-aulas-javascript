console.group("Ter conteudos com JQuery")
console.log("#paragrafo-1")
console.warn($("#paragrafo-1").text());

console.groupEnd()


console.group("Alterar conteudos com jQuery")

$("#paragrafo-2").text("Conteudo escrito com jQuerry")

console.log($("#paragrafo-2").text());

console.groupEnd()


console.group("Ler Varios conteudos com jQuery")

let lista = $("p")

console.log(lista)

$("p").each(function () {
    console.log(this.textContent);
})

console.groupEnd()


console.group("Escrever varios conteudos com JQuery")
$("li").text("li escrito com JQuery")

console.groupEnd()


console.group("Criar elementos com JQuery")
$("<button>", {
    text: "Clique Aqui!",
    class: "btn btn-primary"
}).appendTo("body")

$("body").append(
    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto italico" }),
)
    console.groupEnd()

    
    console.group('Mais de um item com jQuery'); 
    $("<ul>").append(

        $("<li>",{
        
        text: "Item 1"
        }),

        $("<li>",{
        
        text: "Item 2"
        }),
        $("<li>",{
        
        text:"Item 3"
})
        ).appendTo("#aqui2")

console.groupEnd();


console.group("Exercicio criar varios conteudos com jQuery")

$("<table>").append(

$("<thead>").append(

$("<th>", {text: "Nome"}),

$("<th>", {text: "Idade"}),

$("<th>", {text: "Cidade"})
),
$("<tbody>").append(

$("<tr>").append(

$("<td>", {text: "Henrique Vassiliou"}),

$("<td>", {text: "16"}),

$("<td>", {text: "Içara"}),
 ),

$("<tr>").append(

$("<td>", {text: "Zé"}),

$("<td>", {text: "80"}),

$("<td>",{text: "Inbituba"}),
)
)

).appendTo("body")

console.groupEnd()


console.group('Click Events in qualquer place')

$("p").on("click", function() { alert("Opa!")

})

$("li").on("click", function() { console.warn("Opal opa!");

})

$("#ok").on("click", function() { alert("Ok")

})

console.groupEnd();


console.group("Atividade JQuery")

$("#add").on("click", function() {
    $("<p>", {text:"TESTE", class:"alert alert-danger"}).appendTo("body")
})

$("#limpar").on("click", function() {
    $(`.alert`).remove()
})


console.groupEnd();