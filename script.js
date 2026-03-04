const botaoCalcular = document.getElementById("btn_calcular");

botaoCalcular.addEventListener("click", function(){

    let montanteTotal = 0;

    let investimentoInicial = Number(document.getElementById("investimento_inicial").value);

    let investimentoMensal = Number(document.getElementById("investimento_mensal").value);

    let taxaSelic = Number(document.getElementById("taxa_selic").value);

    let porcentagemCdi = Number(document.getElementById("porcentagem_cdi").value);
    porcentagemCdi = porcentagemCdi/100;

    let tempoRendimento = Number(document.getElementById("tempo_rendimento").value);

    let tipoTempo = document.getElementById("periodo").value;

    let tempoFinal = tempoRendimento;


    if(tipoTempo === "anual"){
        tempoFinal = tempoFinal * 12;
    }

    let taxaDi = taxaSelic - 0.1;
    
    let rendimentoAnualBruto = taxaDi * porcentagemCdi;

    let taxaMensal = (1 + (rendimentoAnualBruto)/100 ) ** (1/12) - 1;

    montanteTotal = investimentoInicial

    for(let i = 0; i < tempoFinal; i++){
        montanteTotal = montanteTotal * (1 + taxaMensal);
        montanteTotal = montanteTotal + investimentoMensal;
    }
    
    let montanteFormatado = montanteTotal.toFixed(2);
    document.getElementById("texto_resultado").innerText = `O montante final é : R$ ${montanteFormatado}`;
});






