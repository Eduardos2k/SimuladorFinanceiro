const botaoCalcular = document.getElementById("btn_calcular");

let montanteTotal = 0;

botaoCalcular.addEventListener("click", function(){

    let investimentoInicial = Number(document.getElementById("investimento_inicial").value);

    let investimentoMensal = Number(document.getElementById("investimento_mensal").value);

    let taxaCdi = Number(document.getElementById("taxa_cdi").value);

    let tempoRendimento = Number(document.getElementById("tempo_rendimento").value);

    let tipoTempo = document.getElementById("periodo").value;

    let tempoFinal = tempoRendimento;

    tempoFinal = tempoFinal;

    if(tipoTempo === "anual"){
        tempoFinal = tempoFinal * 12;
    }


    let taxaMensal = (1 + taxaCdi/100 ) ** (1/12) - 1;
    

    montanteTotal = investimentoInicial

    for(let i = 0; i < tempoFinal; i++){
        montanteTotal = montanteTotal * (1 + taxaMensal);
        montanteTotal = montanteTotal + investimentoMensal;
    }
    
    let montanteFormatado = montanteTotal.toFixed(2);
    document.getElementById("texto_resultado").innerText = `O montante final é : R$ ${montanteFormatado}`;
});






