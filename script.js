


function atividade1() {


    let total = 0;
    let continuar = true;


    while (continuar) {


        let valor = Number(prompt("Informe um número (0 para parar):"));


        if (isNaN(valor)) {
            alert("Digite um valor numérico válido.");
        } else {
            total = total + valor;
        }


        continuar = confirm("Deseja inserir outro número?");
    }


    alert("Resultado da soma: " + total);
    console.log("Resultado da soma:", total);
}
//atividade1()

function atividade2() {


    console.log("Preparando lançamento...");


    for (let contador = 10; contador >= 0; contador--) {
        console.log(contador);
    }


    console.log("Foguete lançado com sucesso!");
}
//atividade2()

function atividade3() {


    let ganhos = 0;
    let despesas = 0;


    for (let mes = 1; mes <= 12; mes++) {


        let entrada = Number(prompt("Informe o ganho do mês " + mes));
        let saida = Number(prompt("Informe o gasto do mês " + mes));


        ganhos += entrada;
        despesas += saida;
    }


    let resultado = ganhos - despesas;


    console.log("Total recebido no ano:", ganhos);
    console.log("Total gasto no ano:", despesas);
    console.log("Saldo final:", resultado);


    if (resultado > 0) {
        console.log("A empresa fechou o ano com lucro.");
    } else if (resultado < 0) {
        console.log("A empresa fechou o ano com prejuízo.");
    } else {
        console.log("A empresa terminou o ano sem lucro nem prejuízo.");
    }
}
 //atividade3()
  
 function atividade4() {


    let v1 = Number(prompt("Informe um número inteiro"));
    let v2 = Number(prompt("Informe outro número inteiro"));
    let v3 = Number(prompt("Informe mais um número"));
    let v4 = Number(prompt("Informe o último número"));


    let lista = [v1, v2, v3, v4];


    lista.sort((x, y) => y - x);


    console.log("Valores em ordem decrescente:", lista);
}
//atividade4()

function atividade5() {


    let valor = Number(prompt("Digite um número inteiro"));


    if (valor % 2 === 0) {
        valor = valor + 1;
    } else {
        valor = valor - 1;
    }


    console.log("Número após transformação:", valor);
}
//atividade5()

function atividade6() {


    let caractere = prompt("Digite uma letra:").toLowerCase();


    if ("aeiou".includes(caractere)) {
        console.log("A letra digitada é uma vogal.");
    } else {
        console.log("A letra digitada é uma consoante.");
    }
}
//atividade6()

function atividade7() {


    let codigo = prompt(
        "Escolha o sabor do picolé:\n" +
        "a - Chocolate\n" +
        "b - Morango\n" +
        "c - Creme\n" +
        "d - Manga\n" +
        "e - Melancia\n" +
        "f - Vanilla Ice\n" +
        "g - Céu Azul\n" +
        "h - Brownie\n" +
        "i - Havaiano"
    );


    switch (codigo) {


        case "a":
            console.log("Chocolate - R$1,50");
            break;


        case "b":
            console.log("Morango - R$2,50");
            break;


        case "c":
            console.log("Creme - R$2,50");
            break;


        case "d":
            console.log("Manga - R$3,20");
            break;


        case "e":
            console.log("Melancia - R$3,40");
            break;


        case "f":
            console.log("Vanilla Ice - R$3,00");
            break;


        case "g":
            console.log("Céu Azul - R$3,60");
            break;


        case "h":
            console.log("Brownie - R$4,00");
            break;


        case "i":
            console.log("Havaiano - R$5,00");
            break;


        default:
            console.log("Código informado não existe.");
    }
}
// atividade7()
function atividade8() {


    let numeroA = 18;
    let numeroB = 14;


    console.log("Diferença entre os valores:", numeroA - numeroB);


    let calculo = (numeroA * 2) + (numeroB * 3);
    console.log("Dobro do primeiro + triplo do segundo:", calculo);


    console.log("Multiplicação dos valores:", numeroA * numeroB);
}
// atividade8()







