const botaoCalcular = document.getElementById("btn_calcular");



botaoCalcular.addEventListener("click", function(){

    let investimentoInicial = Number(document.getElementById("investimento_inicial").value);

    let investimentoMensal = Number(document.getElementById("investimento_mensal").value);

    let taxaCdi = Number(document.getElementById("taxa_cdi").value);

    let tempoRendimento = Number(document.getElementById("tempo_rendimento").value);

    let tipoTempo = document.getElementById("periodo").value;

    let tempoFinal = tempoRendimento;

    if(tipoTempo === "anual"){
        tempoFinal = tempoFinal * 12;
    }

    console.log("Tempo total em meses para o cálculo: ", tempoFinal);

});