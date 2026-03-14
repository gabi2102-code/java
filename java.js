
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


