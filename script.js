


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







